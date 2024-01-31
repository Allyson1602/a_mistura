import 'dotenv/config';
import md5 from 'md5';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthorizationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => NextFunction) {
    const authValue = req.get('Authorization');

    if (md5(authValue) !== md5(process.env.AUTH_TOKEN)) {
      return res.status(401).jsonp({
        statusCode: 401,
        error: 'Unauthorized',
      });
    }
  }
}
