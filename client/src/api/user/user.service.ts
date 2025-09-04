import { instance } from "@/middlewares/axios.middleware";

// types
import type { UpdateUser } from "./user.types";

const UserService = {
  async get() {
    const { data } = await instance.get("/users");
    return data;
  },
  async update(body: UpdateUser) {
    const { data } = await instance.patch("/users", body);
    return data;
  },
  async getSessions() {
    const { data } = await instance.get("/users/sessions");
    return data;
  },
  async setAvatar(imageBase64: string) {
    const { data } = await instance.post("/users/set-avatar", { image: imageBase64 });
    return data;
  },
};

export default UserService;
