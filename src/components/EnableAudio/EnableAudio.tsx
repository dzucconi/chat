import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useAudiate } from "audiate";

import { isTouchDevice } from "../../lib/isTouchDevice";
import { AudioIndicator } from "../AudioIndicator";
import { SKIN } from "../../styles";

const isTouch = isTouchDevice();

const Enabler = styled.button`
  appearance: none;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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
  const [audioContextState] = useAudiate();
  const [isEnabled, setEnabled] = useState(false);
  const handleClick = useCallback(() => setEnabled(true), []);

  if (audioContextState === "running" || isEnabled) {
    return (
      <>
        <AudioIndicator audioContextState={audioContextState} />
        {children}
      </>
    );
  }

  return (
    <Enabler onClick={handleClick}>
      {isTouch ? "Tap" : "Click"} to enable audio
    </Enabler>
  );
};
