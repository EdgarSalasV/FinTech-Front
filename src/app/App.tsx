import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import * as _redux from "../redux/setupAxios";
import { Provider } from "react-redux";
import store, { persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Routes } from "./Routes";
import { LayoutSplashScreen } from "./modules/SplasScreen";

export const App: React.FC<{}> = () => {
  console.log(process.env.REACT_APP_CLIENT_ID);
  console.log("process.env", process.env);
  console.log(process.env.REACT_APP_KEY);

  _redux.setupAxios(axios, store);

  return (
    /* Provide Redux store */
    <Provider store={store}>
      {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
      <PersistGate persistor={persistor} loading={<LayoutSplashScreen />}>
        {/* Add high level `Suspense` in case if was not handled inside the React tree. */}
        <React.Suspense fallback={<LayoutSplashScreen />}>
          {/* Override `basename` (e.g: `homepage` in `package.json`) */}
          <Router>
            {/* Render routes with provided `Layout`. */}
            <Routes />
          </Router>
        </React.Suspense>
      </PersistGate>
    </Provider>
  );
};
