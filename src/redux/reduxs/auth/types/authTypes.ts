export interface iAuth {
  id: string;
  email: string;
  created_at: string;
  updated_at: string;
  jti: string;
  isAuthorized: boolean;
}

type iActionLogin = (
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

type iActionRegisterLogin = (
  jti: string
) => {
  type: string;
  payload: {
    jti: string;
  };
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
  payload: {
    id: string;
    email: string;
    created_at: string;
    updated_at: string;
    jti: string;
  };
};

type iActionFulFillUser = (
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

export type iActions = {
  login?: iActionLogin;
  register?: iActionRegisterLogin;
  logout?: iActionLogout;
  requestUser?: iActionRequestUser;
  fulfillUser?: iActionFulFillUser;
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
