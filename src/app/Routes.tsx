import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import { shallowEqual, useSelector } from "react-redux";
// import BasePage from "./BasePage";
// import { Logout, AuthPage } from "./modules/Auth";
// import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";
import AccountsPage from "./modules/Accounts/accountsPage";
import Dashboard from "./modules/BasePage/basePage";

export function Routes() {
  // const { isAuthorized } = useSelector(
  //   ({ auth }) => ({
  //     isAuthorized: auth.user != null,
  //   }),
  //   shallowEqual
  // );

  return (
    <Router>
      <Switch>
        {/* {!isAuthorized ? ( 
        /*Render auth page when user at `/auth` and not authorized.*/}
        {/* <Route>
          <AuthPage />
        </Route>
      ) : ( */}
        {/* <Redirect from="/auth" to="/" />
      )} */}

        <Route path="/accounts" component={AccountsPage} />
        {/* <Route path="/error" component={ErrorsPage} />
      <Route path="/logout" component={Logout} /> */}
        <Dashboard />
        {/* {!isAuthorized ? (
        <Redirect to="/auth/login" />
      ) : (
        <div>
          <BasePage />
        </div>
      )} */}
      </Switch>
    </Router>
  );
}
