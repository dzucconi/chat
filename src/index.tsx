import React from "react";
import ReactDOM from "react-dom";
import parameters from "queryparams";

import "./index.css";

import { App } from "./App";
import { Available } from "./components/Available";
import { Model } from "./lib/conversation";
import * as serviceWorker from "./serviceWorker";

const DEFAULT_VIEWPORT_WIDTH = 320;

const {
  autoPlay,
  amount,
  model,
  index
}: {
  autoPlay: boolean;
  amount: number;
  model: Model;
  index: boolean;
} = parameters({
  autoPlay: true,
  amount:
    Math.floor(document.documentElement.clientWidth / DEFAULT_VIEWPORT_WIDTH) ||
    1,
  model: "apologizer",
  index: false
});

ReactDOM.render(
  index ? (
    <Available />
  ) : (
    <App autoPlay={autoPlay} amount={amount} model={model} />
  ),
  document.getElementById("root")
);

serviceWorker.unregister();
