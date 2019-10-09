import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { Chat } from "./components/Chat";
import { COLORS } from "./styles";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${COLORS.bg};
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
}

export const App: React.FC<Props> = ({ amount, autoPlay }) => {
  return (
    <>
      <GlobalStyles />

      <Container>
        {new Array(amount).fill(undefined).map((_, index) => (
          <Chat key={index} autoPlay={autoPlay} />
        ))}
      </Container>
    </>
  );
};
