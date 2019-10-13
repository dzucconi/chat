import React from "react";
import styled, { keyframes } from "styled-components";

import { SKIN } from "../../styles";

export const CARET_WIDTH = 2;

const fade = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Container = styled.span`
  position: relative;
`;

const Blinking = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${CARET_WIDTH}px;
  height: 100%;
  background-color: ${SKIN.cursorFg};
  animation: ${fade} 1s infinite cubic-bezier(1, 0, 0, 1);
`;

interface Props {
  focused: boolean;
}

export const Caret: React.FC<Props> = ({ focused }) => {
  return <Container>{focused && <Blinking />}</Container>;
};
