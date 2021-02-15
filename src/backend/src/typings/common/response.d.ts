interface SuccessResponse {
  data: any;
}
interface ErrorResponse {
  error: Error;
}
interface Error {
  code: number;
  message: string;
}

export { SuccessResponse, ErrorResponse };
