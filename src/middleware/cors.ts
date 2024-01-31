import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => NextFunction) {
    res.header(
      'Access-Control-Allow-Origin',
      'https://a-mistura-ca8y8djn6-allyson1602.vercel.app',
    );
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, Access-Control-Allow-Origin, Access-Control-Allow-Headers',
    );
    next();
  }
}
