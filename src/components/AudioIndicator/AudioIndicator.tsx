import React from "react";
import styled, { css, keyframes } from "styled-components";

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

interface Props {
  audioContextState: AudioContextState;
}

const Container = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  padding: 0.75em 1em;
  z-index: 1;

  ${({ audioContextState }) =>
    ({
      running: css`
        animation: ${fadeOut} 3s;
        animation-delay: 1s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
      `,
      suspended: css`
        cursor: pointer;
      `,
      closed: css`
        cursor: pointer;
      `
    }[audioContextState])}
`;

export const AudioIndicator: React.FC<Props> = ({ audioContextState }) => {
  return (
    <Container audioContextState={audioContextState}>
      {audioContextState === "running" ? "🔊" : "🔇"}
    </Container>
  );
};
