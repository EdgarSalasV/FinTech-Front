import { AxiosStatic } from "axios";

export function setupAxios(axios: AxiosStatic, store: any) {
  axios.interceptors.request.use(
    (config) => {
      const {
        auth: { authToken, user },
      } = store.getState();
      console.log("ALL!!!!!!!");
      if (authToken) {
        // config.headers["token-type"] = "Bearer";
        // config.headers.Authorization = `Bearer ${authToken}`;
        // config.headers.uid = user.uid;
        // config.headers.client = client;
        // config.headers.expiry = expiry;
        // config.headers["Content-Type"] = "application/json; charset=UTF-8";
        // config.headers["access-token"] = token;
      }

      return config;
    },
    (err: any) => {
      if (!err.response) {
        console.log("error CHIDOO", err);
      }
      return Promise.reject(err);
    }
  );
}
