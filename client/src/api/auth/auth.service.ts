import { instance } from "@/middlewares/axios.middleware";

// types
import type { ChangePasswordBody, LoginBody, RegisterBody } from "./auth.types";

const AuthService = {
  async register(body: RegisterBody) {
    const { data } = await instance.post("/auth/register", body);
    return data;
  },
  async login(body: LoginBody) {
    const { data } = await instance.post("/auth/login", body);
    return data;
  },
  async changePassword(body: ChangePasswordBody) {
    const { data } = await instance.post("/auth/change-password", body);
    return data;
  },
  async refresh() {
    const { data } = await instance.post("/auth/refresh");
    return data;
  },
  async logout() {
    const { data } = await instance.post("/auth/logout");
    return data;
  },
  async logoutAll() {
    const { data } = await instance.post("/auth/logout-all");
    return data;
  },
  async getSessions() {
    const { data } = await instance.get("/auth/sessions");
    return data;
  },
  async deleteSession(sessionId: string) {
    const { data } = await instance.delete(`/auth/sessions/${sessionId}`);
    return data;
  },
};

export default AuthService;
