import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
// import { Logout, AuthPage } from "./modules/Auth";
// import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";
import AccountsPage from "./modules/Accounts/accountsPage";
import { Dashboard } from "./modules/BasePage/basePage";
import { AuthBase } from "./modules/Auth/AuthBase";

export const Routes = () => {
  const { isAuthorized } = useSelector<any, any>(
    ({ auth }) => ({
      isAuthorized: auth.user != null,
    }),
    shallowEqual
  );

  console.log("isAuthorized", isAuthorized);
  return (
    <React.Fragment>
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
        <Route path="/SignIn" component={AuthBase} />
        <Route path="/SignUp" component={AuthBase} />
        {/* <Route path="/error" component={ErrorsPage} />
      <Route path="/logout" component={Logout} /> */}
        {!isAuthorized ? <AuthBase /> : <Dashboard />}
        {/* {!isAuthorized ? (
        <Redirect to="/auth/login" />
      ) : (
        <div>
          <BasePage />
        </div>
      )} */}
      </Switch>
    </React.Fragment>
  );
};
