import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import { App } from "./App";
import { Available } from "./components/Available";
import * as serviceWorker from "./serviceWorker";
import { index, autoPlay, amount, model } from "./config";

ReactDOM.render(
  index ? (
    <Available />
  ) : (
    <App autoPlay={autoPlay} amount={amount} model={model} />
  ),
  document.getElementById("root")
);

serviceWorker.unregister();
