import React from "react";
import ReactDOM from "react-dom";
import parameters from "queryparams";

import "./index.css";

import { App } from "./App";

import * as serviceWorker from "./serviceWorker";

const { autoPlay, amount }: { autoPlay: boolean; amount: number } = parameters({
  autoPlay: true,
  amount: 1
});

ReactDOM.render(
  <App autoPlay={autoPlay} amount={amount} />,
  document.getElementById("root")
);

serviceWorker.unregister();
