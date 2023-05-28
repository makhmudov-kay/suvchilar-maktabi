export interface BannerResponse {
  id: number;
  title: ContentByLanguage;
  description: ContentByLanguage;
  photo: string;
  updated_at?: Date;
  created_at?: Date;
}

interface ContentByLanguage {
  ru: string;
  uz_cyrl: string;
  uz_latn: string;
}
