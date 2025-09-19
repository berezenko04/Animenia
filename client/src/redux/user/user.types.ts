import type { Statuses } from "@/types/enums.types";

export interface UserInitialState {
  user: User | null;
  status: Statuses;
}

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
};
