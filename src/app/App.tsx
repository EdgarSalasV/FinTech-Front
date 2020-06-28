import * as React from "react";
import { Routes } from "./Routes";
import { Provider } from "react-redux";
import store, { persistor } from "../redux/store";

export interface HelloWorldProps {
  userName: string;
  lang: string;
}

export const App = (props: HelloWorldProps) => {
  console.log(process.env.REACT_APP_CLIENT_ID);
  console.log("process.env", process.env);
  console.log(process.env.REACT_APP_KEY);
  return (
    /* Provide Redux store */
    <Provider store={store}>
      <React.Fragment>
        {/* <h1>
        Hi {props.userName}, Welcome to {props.lang}!
      </h1> */}
        <Routes />
      </React.Fragment>
    </Provider>
  );
};
