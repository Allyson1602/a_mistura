import 'dotenv/config';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import HttpResponse from 'src/utils/http-response';
import { EStatusCode } from 'src/enums/status-code';

@Injectable()
export class AuthorizationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => NextFunction) {
    const authValue = req.get('Authorization');

    if (authValue !== process.env.AUTH_TOKEN) {
      const response = HttpResponse.error(
        EStatusCode.UNAUTHORIZED,
        'Unauthorized',
      );

      return res.status(EStatusCode.UNAUTHORIZED).jsonp(response);
    }

    next();
  }
}
