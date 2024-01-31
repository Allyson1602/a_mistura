import { EStatusCode } from 'src/enums/status-code';
import { IHttpResponse } from 'src/types/response';

class HttpResponse {
  static success<O>(statusCode: EStatusCode, data: O): IHttpResponse<O> {
    const responseValue: IHttpResponse<O> = {
      statusCode,
      success: true,
      data,
    };

    return responseValue;
  }

  static error<O>(
    statusCode: EStatusCode,
    message: string,
    messageUser?: string,
    data: O = null,
  ): IHttpResponse<O> {
    const responseValue: IHttpResponse<O> = {
      statusCode,
      success: false,
      data,
      message,
      messageUser,
    };

    return responseValue;
  }
}

export default HttpResponse;
