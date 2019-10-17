import React from "react";
import styled from "styled-components";
import { useAudiate } from "audiate";

import { isTouchDevice } from "../../lib/isTouchDevice";
import { AudioIndicator } from "../AudioIndicator";

const isTouch = isTouchDevice();

const Enabler = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.25rem;
`;

interface Props {
  children: React.ReactNode;
}

export const EnableAudio: React.FC<Props> = ({ children }) => {
  const [audioContextState] = useAudiate();

  if (audioContextState === "running") {
    return (
      <>
        <AudioIndicator audioContextState={audioContextState} />
        {children}
      </>
    );
  }

  return <Enabler>{isTouch ? "Tap" : "Click"} to enable audio</Enabler>;
};
