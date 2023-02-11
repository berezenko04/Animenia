import { RootState } from "../store";

export const newsItemsSelector = (state: RootState) => state.news.items;
export const statusSelector = (state: RootState) => state.news.status;