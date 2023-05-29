export class BaseResponse<T = unknown> {
  success?: boolean;
  data!: T;
  // TODO: FIX TYPE ANY
  error!: any;

  constructor(data: T = {} as T) {
    this.data = data;
    this.error = [];
  }
}
