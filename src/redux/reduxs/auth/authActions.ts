import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { put, takeLatest } from "redux-saga/effects";

export const actionTypes = {
  Login: "Login",
  Logout: "[Logout] Action",
  Register: "[Register] Action",
  UserRequested: "[Request User] Action",
  UserLoaded: "[Load User] Auth API"
};

export const actions = {
  login: (authToken, uid, client, expiry, token) => ({ type: actionTypes.Login, payload: { authToken, uid, client, expiry, token } }),
  register: authToken => ({
    type: actionTypes.Register,
    payload: { authToken }
  }),
  logout: () => ({ type: actionTypes.Logout }),
  requestUser: user => ({ type: actionTypes.UserRequested, payload: { user } }),
  fulfillUser: user => ({ type: actionTypes.UserLoaded, payload: { user } })
};