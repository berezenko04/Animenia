import toast from "react-hot-toast";

export const catchError = (err: any) => {
  return toast.error(err?.response?.data?.message?.message || "Unknown error");
};
