import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AnimeItem, AnimeSliceState, Status } from './types';

import { fetchAnime, fetchSortedAnime } from './asyncActions';

const initialState: AnimeSliceState = {
    items: [],
    sortedItems: [],
    itemsStatus: Status.LOADING,
    sortedItemsStatus: Status.LOADING
}

export const AnimeSlice = createSlice({
    name: 'anime',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAnime.pending, (state) => {
            state.items = [];
            state.itemsStatus = Status.LOADING;
        })

        builder.addCase(fetchAnime.fulfilled, (state, action: PayloadAction<AnimeItem[]>) => {
            state.items = action.payload;
            state.itemsStatus = Status.SUCCESS;
        })

        builder.addCase(fetchAnime.rejected, (state) => {
            state.items = [];
            state.itemsStatus = Status.ERROR;
        })

        builder.addCase(fetchSortedAnime.pending, (state) => {
            state.sortedItems = [];
            state.sortedItemsStatus = Status.LOADING;
        })

        builder.addCase(fetchSortedAnime.fulfilled, (state, action: PayloadAction<AnimeItem[]>) => {
            state.sortedItems = action.payload;
            state.sortedItemsStatus = Status.SUCCESS;
        })

        builder.addCase(fetchSortedAnime.rejected, (state) => {
            state.sortedItems = [];
            state.sortedItemsStatus = Status.ERROR;
        })
    }
})

export default AnimeSlice.reducer;