import React, { useState, useCallback, useRef, useEffect } from "react";
import styled from "styled-components";

import { SKIN } from "../../styles";
import { mixin as bubbleMixin } from "../Bubble";
import { respectSpaces } from "../../lib/respectSpaces";
import { CARET_WIDTH, Caret } from "../Caret";

const Form = styled.form`
  padding: 0 1em 1em 1em;
`;

const Field = styled.div`
  ${bubbleMixin}
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  color: ${SKIN.inputFg};
  border: 1px solid ${SKIN.inputBorder};
  background-color: ${SKIN.inputBg};
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

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Placeholder = styled.div`
  color: ${SKIN.placeholderFG};
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
  const ref = useRef<HTMLSpanElement>(null);
  const [mode, setMode] = useState(Mode.FOCUSED);
  const [lines, setNumberOfLines] = useState(1);

  const handleLines = useCallback(() => {
    ref.current && setNumberOfLines(ref.current.getClientRects().length);
  }, []);

  const handleBlur = useCallback(() => setMode(Mode.BLURRED), []);
  const handleFocus = useCallback(() => setMode(Mode.FOCUSED), []);

  useEffect(() => handleLines(), [handleLines, input]);

  return (
    <Form onSubmit={onSubmit} onBlur={handleBlur} onFocus={handleFocus}>
      <Field lines={lines}>
        {input ? (
          <Wrapper>
            <span
              ref={ref}
              dangerouslySetInnerHTML={{ __html: respectSpaces(input) }}
            />
            <Caret key={input} focused={mode === Mode.FOCUSED} />
          </Wrapper>
        ) : (
          <Wrapper>
            <Placeholder>Message</Placeholder>
            <Caret key={input} focused={mode === Mode.FOCUSED} />
            &nbsp;
          </Wrapper>
        )}

        <Value onChange={onInput} autoFocus value={input} disabled={disabled} />
      </Field>
    </Form>
  );
};
