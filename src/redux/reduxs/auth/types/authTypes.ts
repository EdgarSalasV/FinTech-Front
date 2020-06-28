export interface iAuth {
  id: number;
  email: string;
  created_at: string;
  updated_at: string;
  jti: string;
  isAuthorized: boolean;
}

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
}