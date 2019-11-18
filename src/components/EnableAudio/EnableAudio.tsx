import React, { useState, useCallback } from "react";
import styled from "styled-components";

import { play } from "../../audio";
import { isTouchDevice } from "../../lib/isTouchDevice";
import { SKIN } from "../../styles";
import { forceEnable } from "../../config";

const isTouch = isTouchDevice();

const Enabler = styled.button`
  appearance: none;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  font-size: 1.25rem;
  color: ${SKIN.fg};
  background-color: ${SKIN.bg};
  border: none;
`;

interface Props {
  children: React.ReactNode;
}

export const EnableAudio: React.FC<Props> = ({ children }) => {
  const [isEnabled, setEnabled] = useState(!(forceEnable || isTouch));

  const handleClick = useCallback(() => {
    play("type");
    setEnabled(true);
  }, []);

  if (isEnabled) return <>{children}</>;

  return (
    <Enabler onClick={handleClick}>
      {isTouch ? "Tap" : "Click"} to enable
    </Enabler>
  );
};
