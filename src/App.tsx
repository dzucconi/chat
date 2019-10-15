import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { Head } from "./components/Head";
import { Chat } from "./components/Chat";
import { SKIN } from "./styles";
import { Model } from "./lib/conversation";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${SKIN.bg};
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
  return (
    <>
      <Head skin={SKIN} />
      <GlobalStyles />

      <Container>
        {new Array(amount).fill(undefined).map((_, index) => (
          <Chat key={index} autoPlay={autoPlay} model={model} />
        ))}
      </Container>
    </>
  );
};
