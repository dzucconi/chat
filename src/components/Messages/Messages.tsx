import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { Message, TMessage } from "../Message";

const Container = styled.div`
  flex: 1;
  overflow: hidden;
  padding: 1em 1em 2em 1em;
`;

interface Props {
  messages: TMessage[];
  forwardedRef?: React.Ref<HTMLDivElement>;
  children: React.ReactNode;
}

const __Messages__: React.FC<Props> = ({
  messages,
  children,
  forwardedRef
}) => {
  const end = useRef<HTMLDivElement>(null);

  useEffect(() => {
    end.current && end.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Container ref={forwardedRef}>
      {messages.map(message => (
        <Message key={message.body + message.timestamp} message={message} />
      ))}

      {children}

      <div ref={end} />
    </Container>
  );
};

export const Messages = React.forwardRef(
  (props: Props, ref: React.Ref<HTMLDivElement>) => (
    // eslint-disable-next-line react/jsx-pascal-case
    <__Messages__ {...props} forwardedRef={ref} />
  )
);
