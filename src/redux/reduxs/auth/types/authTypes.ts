export interface iAuth {
  id: string;
  email: string;
  created_at: string;
  updated_at: string;
  jti: string;
  isAuthorized?: boolean;
}

export type iActionLogin = (
  id: string,
  email: string,
  created_at: string,
  updated_at: string,
  jti: string
) => {
  type: string;
  payload: {
    id: string;
    email: string;
    created_at: string;
    updated_at: string;
    jti: string;
  };
};

type iActionRegister = (
  jti: string
) => {
  type: string;
  payload: any
};

type iActionLogout = () => {
  type: string;
};

type iActionRequestUser = (
  id?: string,
  email?: string,
  created_at?: string,
  updated_at?: string,
  jti?: string
) => {
  type: string;
  payload: any
};

type iActionFulFillUser = (
  id: string,
  email: string,
  created_at: string,
  updated_at: string,
  jti: string
) => {
  type: string;
  payload: any;
};

export type iActions = {
  login: iActionLogin;
  register: iActionRegister;
  logout: iActionLogout;
  requestUser: iActionRequestUser;
  fulfillUser: iActionFulFillUser;
};

export type SliceState = {
  listLoading: boolean;
  actionsLoading: boolean;
  user: string;
  authToken: string;
  client: string;
  expiry: number;
  token: string;
  error: string;
};

type iAction = {
  payload: any;
  type: string;
};
