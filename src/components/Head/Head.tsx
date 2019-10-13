import React from "react";
import { Helmet } from "react-helmet";

import { Skin } from "../../styles/skin";

interface Props {
  skin: Skin;
}

export const Head: React.FC<Props> = ({ skin }) => {
  return (
    <Helmet>
      <title>Chat</title>

      <meta name="theme-color" content={skin.themeColor} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content={skin.statusBarStyle}
      />
      <meta
        name="viewport"
        content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"
      />
    </Helmet>
  );
};
