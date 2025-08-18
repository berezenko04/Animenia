import 'express';

declare module 'express-serve-static-core' {
  interface Request {
    cookies?: { accessToken: string; refreshToken: string };
    user?: { sub: string; email: string };
  }
}
