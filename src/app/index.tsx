import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";

const mainDiv = document.getElementById("root");
ReactDOM.render(
  <App userName="Chechar" lang="TypeScript" />,
  mainDiv
);