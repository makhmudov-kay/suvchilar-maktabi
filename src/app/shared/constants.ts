import { Language } from './models/language.interface';

export enum STATUS {
  STATUS_NEW = 1,
  STATUS_DONE = 2,
  STATUS_CERTIFICATE_GIVEN = 3,
  STATUS_SPAM = 4,
}

export class Constants {
  public static readonly POSITION_DIRECTOR = 1;
  public static readonly POSITION_ACCOUNTANT = 2;
  public static readonly POSITION_WORKER = 3;

  public static readonly TYPE_COTTON_AND_WHEAT = 1;
  public static readonly TYPE_GARDEN_AND_VITICULTURE = 2;
  public static readonly TYPE_VEGETABLE_AND_POLYZ = 3;
  public static readonly TYPE_VEGETABLE_AND_WHEAT = 4;
  public static readonly TYPE_ANOTHER = 5;

  public static readonly GENDER_MALE = 1;
  public static readonly GENDER_FEMALE = 2;

  public static readonly LANGUAGE = 'Language';
  public static readonly ACCESS_TOKEN = 'accessToken';
  public static readonly REFRESH_TOKEN = 'refreshToken';

  public static readonly UZ_LATIN = { code: 'uz_latn', short_name: 'O’zb' };
  public static readonly UZ_CYRILLIC = { code: 'uz_cyrl', short_name: 'Ўзб' };
  public static readonly RU = { code: 'ru', short_name: 'Рус' };
  public static readonly DEFAULT_LANGUAGE = this.UZ_CYRILLIC;
  public static readonly LANGUAGES: Language[] = [
    this.UZ_LATIN,
    this.UZ_CYRILLIC,
    this.RU,
  ];
}
