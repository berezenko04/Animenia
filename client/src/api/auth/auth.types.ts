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
