declare module 'express-serve-static-core' {
  interface Request {
    cookies?: { accessToken: string; refreshToken: string };
    sup?: { userId: string };
  }
}
