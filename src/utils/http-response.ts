import { EStatusCode } from 'src/enums/status-code';
import { IHttpResponse } from 'src/types/response';

class HttpResponse {
  static success<O>(data: O): Promise<IHttpResponse<O>> {
    const responseValue: IHttpResponse<O> = {
      statusCode: EStatusCode.OK,
      success: true,
      data,
    };

    return Promise.resolve(responseValue);
  }

  static error<O>(
    statusCode: EStatusCode,
    message: string,
    messageUser?: string,
    data: O = null,
  ): Promise<IHttpResponse<O>> {
    const responseValue: IHttpResponse<O> = {
      statusCode,
      success: false,
      data,
      message,
      messageUser,
    };

    return Promise.resolve(responseValue);
  }
}

export default HttpResponse;