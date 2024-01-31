export interface IHttpResponse<T> {
  statusCode: number;
  data: T | null;
  metadata?: object;
  success: boolean;
  message?: string;
  messageUser?: string;
}
