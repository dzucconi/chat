import React, { useRef, useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

import { SKIN } from "../../styles";
import { mixin as bubbleMixin } from "../Bubble";
import { respectSpaces } from "../../lib/respectSpaces";
import { Author } from "../../types";

export interface TMessage {
  body: string;
  author: Author;
  timestamp: number;
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

const Bubble = styled.div<Pick<TMessage, "author"> & { lines?: number }>`
  ${bubbleMixin}
  position: relative;
  max-width: 85%;
  color: ${SKIN.bg};
  position: relative;
  display: inline-block;
  margin: 0.25em 0;

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
        color: ${SKIN.meFg};
        background-color: ${SKIN.meBg};

        &:last-of-type {
          animation: ${ANIMATIONS.ME} 0.25s;
          animation-iteration-count: 1;
        }

        &:before {
          z-index: 0;
          right: -7px;
          border-right: 20px solid ${SKIN.meBg};
          border-bottom-left-radius: 16px 14px;
          transform: translate(0, -2px);
        }

        &:after {
          z-index: 1;
          right: -56px;
          width: 26px;
          background-color: ${SKIN.bg};
          border-bottom-left-radius: 10px;
          transform: translate(-30px, -2px);
        }
      `,
      THEM: css`
        align-self: flex-start;
        color: ${SKIN.themFg};
        background-color: ${SKIN.themBg};

        &:last-of-type {
          animation: ${ANIMATIONS.THEM} 0.25s;
          animation-iteration-count: 1;
        }

        &:before {
          z-index: 2;
          left: -7px;
          border-left: 20px solid ${SKIN.themBg};
          border-bottom-right-radius: 16px 14px;
          transform: translate(0, -2px);
        }

        &:after {
          z-index: 3;
          left: 4px;
          width: 26px;
          background-color: ${SKIN.bg};
          border-bottom-right-radius: 10px;
          transform: translate(-30px, -2px);
        }
      `
    }[author])}
`;

export const Message: React.FC<Props> = ({ message: { body, author } }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [lines, setNumberOfLines] = useState(1);

  useEffect(() => {
    ref.current && setNumberOfLines(ref.current.getClientRects().length);
  }, []);

  return (
    <Container author={author}>
      <Bubble author={author} lines={lines}>
        <span
          ref={ref}
          dangerouslySetInnerHTML={{ __html: respectSpaces(body) }}
        />
      </Bubble>
    </Container>
  );
};
