export interface FirstStepResponse {
  success: boolean;
  data: {
    phone: number;
    f_name: string;
    l_name: string;
    s_name: string;
    birthday: string;
    gender: string;
    status: number;
    updated_at: Date;
    created_at: Date;
    id: number;
    certificate_id: string;
  };
}
