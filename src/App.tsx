import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

import { SKIN } from "./styles";
import { Model, models } from "./lib/conversation";
import { Head } from "./components/Head";
import { Chat } from "./components/Chat";
import { EnableAudio } from "./components/EnableAudio";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${SKIN.bg};
    color: ${SKIN.fg};
  }
`;

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

interface Props {
  amount: number;
  autoPlay: boolean;
  model: Model;
}

export const App: React.FC<Props> = ({ amount, autoPlay, model }) => {
  useEffect(() => {
    document.title = models[model].NAME;
  }, [model]);

  return (
    <>
      <Head skin={SKIN} />

      <GlobalStyles />

      <EnableAudio>
        <Container>
          {new Array(amount).fill(undefined).map((_, index) => (
            <Chat key={index} autoPlay={autoPlay} model={model} />
          ))}
        </Container>
      </EnableAudio>
    </>
  );
};
