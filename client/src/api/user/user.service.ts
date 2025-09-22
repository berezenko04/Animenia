import { httpGet, httpPatch, httpPost } from "@/middlewares/axios.middleware";

// types
import type { UpdateUser } from "./user.types";
import type { User } from "@/redux/user/user.types";
import type { BaseResponseData } from "@/types/base.types";

const R = {
  users: "/users",
  setAvatar: "/users/set-avatar",
} as const;

const UserService = {
  async get() {
    return httpGet<User>(R.users);
  },
  async update(body: UpdateUser) {
    return httpPatch<BaseResponseData>(R.users, body);
  },
  async setAvatar(imageBase64: string) {
    return httpPost<BaseResponseData>(R.setAvatar, { image: imageBase64 });
  },
};

export default UserService;
