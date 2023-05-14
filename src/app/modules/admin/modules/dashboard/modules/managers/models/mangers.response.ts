export interface ManagersList {
  success: boolean;
  data: Manager[];
}

export interface Manager {
  id: number;
  login: string;
  phone: string;
  f_name: string;
  l_name: string;
  created_at: Date;
}
