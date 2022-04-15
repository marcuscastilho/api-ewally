export interface ICreateLogRequestDTO {
  protocol: string
  url: string;
  method: string;
  params?: Object;
  headers?: Object;
  query?: Object;
  body?: Object;
}
