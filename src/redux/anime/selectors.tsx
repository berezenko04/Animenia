import { RootState } from "../store";

export const animeItemsSelector = (state: RootState) => state.anime.items;
export const sortedItemsSelector = (state: RootState) => state.anime.sortedItems;