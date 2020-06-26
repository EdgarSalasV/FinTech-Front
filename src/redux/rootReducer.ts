import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import * as auth from "./auth/authRedux";
// import { accountsSlice } from "./accounts/accountsSlice";
// import { countriesSlice } from "./countries/countriesSlice";
// import { currenciesSlice } from "./currencies/countriesSlice";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  // accounts: accountsSlice.reducer,
  // countries: countriesSlice.reducer,
  // PERRON: currenciesSlice.reducer, 
});

export function* rootSaga() {
  yield all([auth.saga()]);
}
