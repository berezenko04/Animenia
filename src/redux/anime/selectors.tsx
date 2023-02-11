import { RootState } from "../store";

export const animeItemsSelector = (state: RootState) => state.anime.items;
export const sortedItemsSelector = (state: RootState) => state.anime.sortedItems;
export const sortedItemsStatusSelector = (state: RootState) => state.anime.sortedItemsStatus;
export const itemsStatusSelector = (state: RootState) => state.anime.itemsStatus;