import React, { useReducer, useCallback, useEffect, useRef } from "react";
import { simulateTyping, simulateStrokeTiming } from "humanization";
import styled from "styled-components";

import { play } from "../../audio";
import { SKIN } from "../../styles";
import { wait } from "../../lib/wait";
import { estimate } from "../../lib/estimate";
import { speak, Model } from "../../lib/conversation";
import { Input } from "../Input";
import { Messages } from "../Messages";
import { TMessage as Message } from "../Message";
import { Indicator } from "../Indicator";
import {
  pauseMin,
  pauseMax,
  cognitionPause,
  maxMessagesLength
} from "../../config";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-wrap: nowrap;
  flex-direction: column;
  height: 100%;
  max-width: 35em;
  margin: 0 auto;
  background-color: ${SKIN.bg};
`;

enum Mode {
  RESTING,
  RESPONDING
}

interface State {
  mode: Mode;
  input: string;
  messages: Message[];
}

type Action =
  | { type: "SEND" }
  | { type: "INPUT"; payload: { input: string } }
  | { type: "RESPONDING" }
  | { type: "RESPOND"; payload: { body: string } }
  | { type: "KEYPRESS"; payload: { character: string } };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SEND": {
      const nextMessages = [
        ...state.messages,
        { body: state.input || ".", author: "ME", timestamp: Date.now() }
      ] as Message[];

      return {
        ...state,
        input: "",
        messages: nextMessages.slice(
          Math.max(0, nextMessages.length - maxMessagesLength)
        )
      };
    }
    case "INPUT":
      return {
        ...state,
        input: action.payload.input
      };
    case "RESPONDING":
      return {
        ...state,
        mode: Mode.RESPONDING
      };
    case "RESPOND": {
      const nextMessages = [
        ...state.messages,
        {
          body: action.payload.body || ".",
          author: "THEM",
          timestamp: Date.now()
        }
      ] as Message[];

      return {
        ...state,
        mode: Mode.RESTING,
        messages: nextMessages.slice(
          Math.max(nextMessages.length - maxMessagesLength, 0)
        )
      };
    }
    case "KEYPRESS":
      return {
        ...state,
        input: state.input + action.payload.character
      };
  }
};

interface Props {
  autoPlay: boolean;
  model: Model;
}

export const Chat: React.FC<Props> = ({ autoPlay, model }) => {
  const [state, dispatch] = useReducer(reducer, {
    mode: Mode.RESTING,
    input: "",
    messages: []
  });

  const indicator = useRef<HTMLDivElement>(null);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (state.input === "") return;
      dispatch({ type: "SEND" });
      play("sent");
    },
    [state.input]
  );

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "INPUT", payload: { input: e.target.value } });
  }, []);

  const handleThem = useCallback(async () => {
    const { output, timing } = await speak({ model, author: "THEM" });
    const last = state.messages[state.messages.length - 1];

    // Read last message
    last && (await wait(estimate(last.body) + cognitionPause));

    // Type new response
    dispatch({ type: "RESPONDING" });
    await wait(timing);

    // Respond
    dispatch({ type: "RESPOND", payload: { body: output } });
    play("received");
  }, [model, state.messages]);

  const handleMe = useCallback(async () => {
    const { humanized } = await speak({ model, author: "ME" });
    const last = state.messages[state.messages.length - 1];

    // Read last message
    await wait(estimate(last.body) + cognitionPause);

    // Type the message
    await simulateTyping({
      stream: humanized.stream,
      onStroke: ({ stroke, previousStroke }) => {
        const sound = stroke.character === " " ? "space" : "type";
        play(sound);

        dispatch({
          type: "KEYPRESS",
          payload: { character: stroke.character }
        });

        return simulateStrokeTiming({
          prevCharacter: previousStroke && previousStroke.character,
          pauseMin,
          pauseMax
        });
      }
    });

    // Send it
    await wait(500);
    dispatch({ type: "SEND" });
    play("sent");
  }, [model, state.messages]);

  // Deal with each message in turn
  useEffect(() => {
    if (!autoPlay) return;

    const last = state.messages[state.messages.length - 1];

    if (!last || (last && last.author === "ME")) {
      handleThem();
      return;
    }

    handleMe();
  }, [autoPlay, handleMe, handleThem, state.messages]);

  // Scroll to indicator when typing
  useEffect(() => {
    if (state.mode === Mode.RESPONDING) {
      indicator.current &&
        indicator.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [indicator, state.mode]);

  return (
    <Container>
      <Messages messages={state.messages}>
        {state.mode === Mode.RESPONDING && <Indicator ref={indicator} />}
      </Messages>

      <Input
        onSubmit={handleSubmit}
        onInput={handleInput}
        input={state.input}
        disabled={autoPlay}
      />
    </Container>
  );
};
