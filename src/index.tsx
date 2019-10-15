import React from "react";
import ReactDOM from "react-dom";
import parameters from "queryparams";
import { block } from "audiate";

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
  amount: 1,
  model: "apologizer"
});

const handleEnable = () =>
  ReactDOM.render(
    <App autoPlay={autoPlay} amount={amount} model={model} />,
    document.getElementById("root")
  );

block({
  message: "Enable audio",
  clickToEnable: true,
  onEnable: handleEnable
});

serviceWorker.unregister();
