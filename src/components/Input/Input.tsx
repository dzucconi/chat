import React, { useState, useCallback } from "react";
import styled, { keyframes } from "styled-components";

import { COLORS } from "../../styles";
import { mixin as bubbleMixin } from "../Bubble";
import { respectSpaces } from "../../lib/respectSpaces";

const fade = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Form = styled.form`
  padding: 0 0.5em;
`;

const Field = styled.div`
  ${bubbleMixin}
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  color: ${COLORS.inputFg};
  border: 1px solid ${COLORS.inputBorder};
  background-color: ${COLORS.inputBg};
`;

const Value = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Sized = styled.div`
  position: relative;
`;

const CARET_WIDTH = 2;

const Caret = styled.div`
  position: absolute;
  width: ${CARET_WIDTH}px;
  height: 100%;
  background-color: ${COLORS.cursorFg};
  animation: ${fade} 1s infinite cubic-bezier(1, 0, 0, 1);
`;

const Placeholder = styled.div`
  color: ${COLORS.placeholderFG};
  position: absolute;
  margin-left: ${CARET_WIDTH * 2}px;
`;

interface Props {
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  input: string;
  disabled: boolean;
}

enum Mode {
  FOCUSED,
  BLURRED
}

export const Input: React.FC<Props> = ({
  onSubmit,
  onInput,
  input,
  disabled
}) => {
  const [mode, setMode] = useState(Mode.FOCUSED);

  const handleBlur = useCallback(() => setMode(Mode.BLURRED), []);
  const handleFocus = useCallback(() => setMode(Mode.FOCUSED), []);

  return (
    <Form onSubmit={onSubmit} onBlur={handleBlur} onFocus={handleFocus}>
      <Field>
        {input ? (
          <span dangerouslySetInnerHTML={{ __html: respectSpaces(input) }} />
        ) : (
          <Placeholder>Message</Placeholder>
        )}

        <Sized>
          {mode === Mode.FOCUSED && <Caret key={input} />}
          &nbsp;
        </Sized>

        <Value onChange={onInput} autoFocus value={input} disabled={disabled} />
      </Field>
    </Form>
  );
};
