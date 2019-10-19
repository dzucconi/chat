import React from "react";
import styled from "styled-components";

import { models, Model } from "../../lib/conversation";

const Container = styled.div`
  padding: 1em;
`;

const Link = styled.a`
  display: block;
  margin: 0.5em 0;
`;

export const Available = () => {
  return (
    <Container>
      {Object.keys(models).map(key => {
        return (
          <Link key={key} href={`/?model=${encodeURIComponent(key)}`}>
            {models[key as Model].NAME}
          </Link>
        );
      })}
    </Container>
  );
};
