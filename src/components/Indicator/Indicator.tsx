import React from "react";
import styled, { keyframes } from "styled-components";

import { mixin as bubbleMixin } from "../Bubble";
import { SKIN } from "../../styles";

interface Props {
  forwardedRef?: React.Ref<HTMLDivElement>;
}

const fade = keyframes`
  50% {
    opacity: 0.5;
  }
`;

export const Container = styled.div`
  ${bubbleMixin}
  display: inline-block;
  margin: 0.25em 0;
  padding-left: 0.66em;
  padding-right: 0.66em;
  user-select: none;
  background-color: ${SKIN.themBg};

  & > span {
    position: relative;
    top: -1px;
    font-size: 0.7rem;
    letter-spacing: -0.2em;
    opacity: 0.2;
    color: ${SKIN.themFg};
  }

  & > span:nth-of-type(1) {
    animation: 1s ${fade} infinite 0.3333s;
  }

  & > span:nth-of-type(2) {
    animation: 1s ${fade} infinite 0.6666s;
  }

  & > span:nth-of-type(3) {
    animation: 1s ${fade} infinite 0.9999s;
    padding-right: 0.2em;
  }
`;

export const __Indicator__: React.FC<Props> = ({ forwardedRef }) => (
  <Container ref={forwardedRef}>
    <span>●</span> <span>●</span> <span>●</span>
  </Container>
);

export const Indicator = React.forwardRef(
  (props: Props, ref: React.Ref<HTMLDivElement>) => (
    // eslint-disable-next-line react/jsx-pascal-case
    <__Indicator__ {...props} forwardedRef={ref} />
  )
);
