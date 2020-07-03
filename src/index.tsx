import * as React from "react";
import * as ReactDOM from "react-dom";
import { SplashScreenProvider } from "./app/modules/SplasScreen";
import { App } from "./app/App";

const mainDiv = document.getElementById("root");
ReactDOM.render(
  <SplashScreenProvider>
    <App />
  </SplashScreenProvider>,
  mainDiv
);
