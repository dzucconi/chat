import styled from "styled-components";

import { COLORS } from "../../styles";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-wrap: nowrap;
  flex-direction: column;
  height: 100vh;
  max-width: 640px;
  margin: 0 auto;
  padding: 1em;
  background-color: ${COLORS.bg};
`;
