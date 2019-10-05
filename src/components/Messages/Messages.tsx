import React from "react";
import styled from "styled-components";

import { Message, TMessage } from "../Message";

const Container = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 1em;
`;

interface Props {
  messages: TMessage[];
}

export const Messages: React.FC<Props> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Message key={message.body} message={message} />
      ))}
    </Container>
  );
};
