import React from "react";
import styled, { css, keyframes } from "styled-components";

import { COLORS } from "../../styles";
import { mixin as bubbleMixin } from "../Bubble";

export interface TMessage {
  body: string;
  author: "ME" | "THEM";
}

interface Props {
  message: TMessage;
}

const ANIMATIONS = {
  ME: keyframes`
    0% {
      opacity: 0;
      transform: translate(-100%, 0);
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  `,
  THEM: keyframes`
    0% {
      opacity: 0;
      transform: translate(100%, 0);
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  `
};

const Container = styled.div<Pick<TMessage, "author">>`
  display: flex;
  flex-direction: column;

  ${({ author }) =>
    ({
      ME: css``,
      THEM: css``
    }[author])}
`;

const Bubble = styled.div<Pick<TMessage, "author">>`
  ${bubbleMixin}
  position: relative;
  margin: 5px 0;
  max-width: 255px;
  color: white;
  position: relative;
  display: inline-block;

  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: -2px;
    height: 15px;
  }

  ${({ author }) =>
    ({
      ME: css`
        align-self: flex-end;
        color: ${COLORS.meFg};
        background-color: ${COLORS.meBg};

        &:last-of-type {
          animation: ${ANIMATIONS.ME} 0.25s;
          animation-iteration-count: 1;
        }

        &:before {
          z-index: 0;
          right: -7px;
          border-right: 20px solid ${COLORS.meBg};
          border-bottom-left-radius: 16px 14px;
          transform: translate(0, -2px);
        }

        &:after {
          z-index: 1;
          right: -56px;
          width: 26px;
          background: ${COLORS.bg};
          border-bottom-left-radius: 10px;
          transform: translate(-30px, -2px);
        }
      `,
      THEM: css`
        align-self: flex-start;
        color: ${COLORS.themFg};
        background-color: ${COLORS.themBg};

        &:last-of-type {
          animation: ${ANIMATIONS.THEM} 0.25s;
          animation-iteration-count: 1;
        }

        &:before {
          z-index: 2;
          left: -7px;
          border-left: 20px solid ${COLORS.themBg};
          border-bottom-right-radius: 16px 14px;
          transform: translate(0, -2px);
        }

        &:after {
          z-index: 3;
          left: 4px;
          width: 26px;
          background: white;
          border-bottom-right-radius: 10px;
          transform: translate(-30px, -2px);
        }
      `
    }[author])}
`;

export const Message: React.FC<Props> = ({ message: { body, author } }) => {
  return (
    <Container author={author}>
      <Bubble author={author}>{body}</Bubble>
    </Container>
  );
};
