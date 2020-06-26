export interface iActionTypes {
  Login: string;
  Logout: string;
  Register: string;
  UserRequested: string;
  UserLoaded: string;
}
export interface iAuth {
  id: number;
  email: string;
  created_at: string;
  updated_at: string;
  jti: string;
}
