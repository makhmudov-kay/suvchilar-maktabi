export interface RegionAndDistrictsResponse {
  success: boolean;
  data: Region[];
}

export interface Region {
  id: number;
  name: string;
  districts: District[];
}

export interface District {
  id: number;
  name: string;
  region_id: number;
}
