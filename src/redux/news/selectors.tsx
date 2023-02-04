import { RootState } from "../store";

export const newsItemsSelector = (state: RootState) => state.news.items;