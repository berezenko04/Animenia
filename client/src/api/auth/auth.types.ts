export type RegisterBody = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export type LoginBody = {
  email: string;
  password: string;
};

export type Session = {
  id: string;
  ipAddress: string;
  browser: string;
  deviceType: string;
  os: string;
  userAgent: string;
  isCurrent: boolean;
  createdAt: Date;
};
