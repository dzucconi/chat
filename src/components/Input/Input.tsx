import React from "react";
import styled, { keyframes } from "styled-components";

import { COLORS } from "../../styles";
import { mixin as bubbleMixin } from "../Bubble";

const fade = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Form = styled.form``;

const Field = styled.input`
  ${bubbleMixin}
  width: 100%;
  color: ${COLORS.inputFg};
  border: 1px solid ${COLORS.inputBorder};
  background-color: ${COLORS.inputBg};

  &:focus {
    outline: none;
  }
`;

interface Props {
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  input: string;
}

export const Input: React.FC<Props> = ({ onSubmit, onInput, input }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Field onChange={onInput} autoFocus value={input} placeholder="Message" />
    </Form>
  );
};
