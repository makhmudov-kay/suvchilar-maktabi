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
}
