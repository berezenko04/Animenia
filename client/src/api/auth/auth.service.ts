import { httpPost, httpGet, httpDelete } from "@/middlewares/axios.middleware";

// types
import type { Session, ChangePasswordBody, LoginBody, RegisterBody, ResetPasswordBody } from "./auth.types";
import type { BaseResponseData } from "@/types/base.types";

const R = {
  register: "/auth/register",
  login: "/auth/login",
  changePassword: "/auth/change-password",
  refresh: "/auth/refresh",
  forgotPassword: "/auth/forgot-password",
  resetPassword: "/auth/reset-password",
  logout: "/auth/logout",
  logoutAll: "/auth/logout-all",
  sessions: "/auth/sessions",
} as const;

const AuthService = {
  async register(body: RegisterBody) {
    return httpPost<BaseResponseData>(R.register, body);
  },
  async login(body: LoginBody) {
    return httpPost<BaseResponseData>(R.login, body);
  },
  async changePassword(body: ChangePasswordBody) {
    return httpPost<BaseResponseData>(R.changePassword, body);
  },
  async resetPassword(body: ResetPasswordBody) {
    return httpPost<BaseResponseData>(R.resetPassword, body);
  },
  async refresh() {
    return httpPost<void>(R.refresh);
  },
  async sendForgotPasswordLink(email: string) {
    return httpPost<BaseResponseData>(R.forgotPassword, { email });
  },
  async logout() {
    return httpPost<BaseResponseData>(R.logout);
  },
  async logoutAll() {
    return httpPost<BaseResponseData>(R.logoutAll);
  },
  async getSessions() {
    return httpGet<Session[]>(R.sessions);
  },
  async deleteSession(sessionId: string) {
    return httpDelete<BaseResponseData>(`${R.sessions}/${sessionId}`);
  },
};

export default AuthService;
