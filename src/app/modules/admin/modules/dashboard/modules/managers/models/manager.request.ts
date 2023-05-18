export interface ManagerRequest {
  f_name: string;
  l_name: string;
  login: string;
  phone: string;
  password: string;
}

export interface ManagerAddedResponse {
  created_at: Date;
  f_name: string;
  id: number;
  l_name: string;
  login: string;
  phone: string;
  role: number;
  updated_at: Date;
}
