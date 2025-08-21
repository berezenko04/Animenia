import { instance } from "@/middlewares/axios.middleware";

const UserService = {
  async get() {
    const { data } = await instance.get("/users/get");
    return data;
  },
  async setAvatar(imageBase64: string) {
    const { data } = await instance.post("/users/set-avatar", { image: imageBase64 });
    return data;
  },
};

export default UserService;
