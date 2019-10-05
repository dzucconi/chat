import React, { useReducer, useCallback } from "react";

import { Container } from "../Container";
import { Input } from "../Input";
import { Messages } from "../Messages";
import { TMessage as Message } from "../Message";

interface State {
  input: string;
  messages: Message[];
}

type Action = { type: "SEND" } | { type: "INPUT"; payload: { input: string } };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SEND":
      return {
        ...state,
        input: "",
        messages: [...state.messages, { body: state.input, author: "ME" }]
      };
    case "INPUT":
      return {
        ...state,
        input: action.payload.input
      };
  }
};

export const Chat: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {
    input: "",
    messages: [
      { body: "A scarlet dress.", author: "THEM" },
      { body: "The blind bard.", author: "ME" }
    ]
  });

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "SEND" });
  }, []);

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "INPUT", payload: { input: e.target.value } });
  }, []);

  return (
    <Container>
      <Messages messages={state.messages} />

      <Input
        onSubmit={handleSubmit}
        onInput={handleInput}
        input={state.input}
      />
    </Container>
  );
};
