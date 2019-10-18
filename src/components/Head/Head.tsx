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
    </Helmet>
  );
};
