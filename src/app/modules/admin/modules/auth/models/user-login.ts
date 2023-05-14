export interface UserLogin {
  login: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  expires_in: number;
  id: number;
  phone: string;
  role: number;
  token_type: string;
}
