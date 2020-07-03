import axios from "axios";
var API_URL = "http://localhost:3001";

export const LOGIN_URL = API_URL + "/login";
export const REGISTER_URL = API_URL + "/api/v1/auth";
export const REQUEST_PASSWORD_URL = API_URL + "/api/v1/auth/password";
export const SUBMIT_PASSWORD_URL = API_URL + "/api/v1/auth/password";

export const ME_URL = "api/me";

export function login(email: string, password: string) {
  return axios.post(LOGIN_URL, { user: { email: email, password: password } });
}

export function register(
  email: string,
  fullname: string,
  username: string,
  password: string
) {
  return axios.post(REGISTER_URL, {
    user: { email, fullname, username, password },
  });
}

export function requestPassword(email: string, redirect_url: string) {
  redirect_url = "";
  return axios.post(REQUEST_PASSWORD_URL, { email, redirect_url });
}

export function submitRequestPassword(
  password: string,
  password_confirmation: string,
  access_token: string,
  client: string,
  uid: string,
  expiry: string
) {
  return axios.put(
    SUBMIT_PASSWORD_URL,
    { password, password_confirmation },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "access-token": access_token,
        client: client,
        uid: uid,
        expiry: expiry,
      },
    }
  );
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(ME_URL);
}
