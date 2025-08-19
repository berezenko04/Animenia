export class CreateSessionDto {
  userId: string;
  refreshToken: string;
  ipAddress?: string;
  userAgent?: string;
  browser?: string;
  os?: string;
  deviceType?: string;
  expiresAt: Date;
}
