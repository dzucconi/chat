import React from "react";
import ReactDOM from "react-dom";
import parameters from "queryparams";

import "./index.css";

import { App } from "./App";
import { Model } from "./lib/conversation";
import * as serviceWorker from "./serviceWorker";

const {
  autoPlay,
  amount,
  model
}: { autoPlay: boolean; amount: number; model: Model } = parameters({
  autoPlay: true,
  amount: Math.floor(window.innerWidth / 320) || 1,
  model: "apologizer"
});

ReactDOM.render(
  <App autoPlay={autoPlay} amount={amount} model={model} />,
  document.getElementById("root")
);

serviceWorker.unregister();
