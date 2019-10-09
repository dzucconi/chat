import React from "react";
import ReactDOM from "react-dom";
import parameters from "queryparams";
import { block } from "audiate";

import "./index.css";

import { App } from "./App";

import * as serviceWorker from "./serviceWorker";

const { autoPlay, amount }: { autoPlay: boolean; amount: number } = parameters({
  autoPlay: true,
  amount: 1
});

const handleEnable = () =>
  ReactDOM.render(
    <App autoPlay={autoPlay} amount={amount} />,
    document.getElementById("root")
  );

block({
  message: "Enable audio",
  clickToEnable: true,
  onEnable: handleEnable
});

serviceWorker.unregister();
