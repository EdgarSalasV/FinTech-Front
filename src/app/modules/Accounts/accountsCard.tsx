import * as React from "react";
import { Switch, Route } from "react-router-dom";
import AccountsEditModal from "./pages/accountsModal/accountsEditModal";
import AccountsTable from "./pages/accountsTable";

const AccountCard = () => {
  return (
    <div>
      <Switch>
        <Route path="/edit/:id" component={AccountsEditModal} />
      </Switch>
      <h1>12</h1>
      <AccountsTable />
    </div>
  );
};

export default AccountCard;
