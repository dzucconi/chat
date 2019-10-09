import { css } from "styled-components";

export const mixin = css`
  border-radius: 1.5em;
  padding: 0.4em 0.9em;
  font-size: 1rem;
  line-height: 1.25;
  font-weight: normal;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;

  ${({ lines = 1 }: { lines?: number }) =>
    lines > 1 &&
    `
      border-radius: 1em;
    `}
`;
