import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { put, takeLatest } from "redux-saga/effects";
import { iAuth, iActions } from "./types/authTypes";

export const actionTypes = {
  Login: "[Login] Action",
  Logout: "[Logout] Action",
  Register: "[Register] Action",
  UserRequested: "[Request User] Action",
  UserLoaded: "[Load User] Auth API",
};

const initialAuthState: iAuth = {
  id: undefined,
  email: undefined,
  created_at: undefined,
  updated_at: undefined,
  jti: undefined,
  isAuthorized: undefined,
};

export const reducer = persistReducer(
  {
    storage,
    key: "auth",
    whitelist: ["id", "email", "created_at", "updated_at", "jti"],
  },
  (
    state = initialAuthState,
    action: {
      payload: any;
      type: string;
    }
  ) => {
    switch (action.type) {
      case actionTypes.Login: {
        let authToken = action.payload.authToken;
        let uid = action.payload.uid;
        let client = action.payload.client;
        let expiry = action.payload.expiry;
        let token = action.payload.token;

        return {
          authToken,
          user: { email: uid, fullname: uid },
          client,
          expiry,
          token,
        };
      }

      case actionTypes.Register: {
        const { authToken } = action.payload;

        return { authToken, user: undefined };
      }

      case actionTypes.Logout: {
        // TODO: Change this code. Actions in reducer aren't allowed.
        return initialAuthState;
      }

      case actionTypes.UserLoaded: {
        // const { user } = action.payload;
        return { state };
      }

      default:
        return state;
    }
  }
);

export const actions
: iActions
= {
  login: (
    id: string,
    email: string,
    created_at: string,
    updated_at: string,
    jti: string
  ) => ({
    type: actionTypes.Login,
    payload: { id, email, created_at, updated_at, jti },
  }),
  register: (jti: string) => ({
    type: actionTypes.Register,
    payload: { jti },
  }),
  logout: () => ({ type: actionTypes.Logout }),
  requestUser: (
    id: string,
    email: string,
    created_at: string,
    updated_at: string,
    jti: string
  ) => ({
    type: actionTypes.UserRequested,
    payload: { id, email, created_at, updated_at, jti },
  }),
  fulfillUser: (
    id: string,
    email: string,
    created_at: string,
    updated_at: string,
    jti: string
  ) => ({
    type: actionTypes.UserLoaded,
    payload: { id, email, created_at, updated_at, jti },
  }),
};

export function* saga() {
  yield takeLatest(actionTypes.Login, function* loginSaga() {
    yield put(actions.requestUser());
  });

  yield takeLatest(actionTypes.Register, function* registerSaga() {
    yield put(actions.requestUser());
  });

  yield takeLatest(actionTypes.UserRequested, function* userRequested() {
    //const { data: user } = yield getUserByToken();
    //yield put(actions.fulfillUser(user));
  });
}
