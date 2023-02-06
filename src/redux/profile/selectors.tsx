import { RootState } from "../store";

export const tabSelector = (state: RootState) => state.profile.tab;