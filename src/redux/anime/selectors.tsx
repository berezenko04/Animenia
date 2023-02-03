import { RootState } from "../store";


export const animeItemsSelector = (state:RootState) => state.anime.items;