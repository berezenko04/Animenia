import { instance } from "@/middlewares/axios.middleware";

// types
import type { LoginBody, RegisterBody } from "./auth.types";

const AuthService = {
  async register(body: RegisterBody) {
    const { data } = await instance.post("/auth/register", body);
    return data;
  },
  async login(body: LoginBody) {
    const { data } = await instance.post("/auth/login", body);
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
};

export default AuthService;
