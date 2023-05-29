export interface BannerRequest {
  title: {
    uz_cyrl: string;
    uz_latn: string;
    ru: string;
  };
  description: {
    uz_cyrl: string;
    uz_latn: string;
    ru: string;
  };
  photo?: File;
}
