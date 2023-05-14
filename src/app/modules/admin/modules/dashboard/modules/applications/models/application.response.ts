export interface ApplicationResponse {
  success: boolean;
  data: Application[];
}

export interface Application {
  certificate_id: number;
  district_id: number;
  f_name: string;
  farm_name: string;
  farm_type: number;
  id: number;
  l_name: string;
  phone: string;
  status: number;
}
