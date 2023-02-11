import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AnimeItem, AnimeSliceState } from './types';

import { fetchAnime, fetchSortedAnime } from './asyncActions';

const initialState: AnimeSliceState = {
    items: [],
    sortedItems: [],
}


export const AnimeSlice = createSlice({
    name: 'anime',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAnime.pending, (state) => {
            state.items = [];
        })

        builder.addCase(fetchAnime.fulfilled, (state, action: PayloadAction<AnimeItem[]>) => {
            state.items = action.payload;
        })

        builder.addCase(fetchAnime.rejected, (state) => {
            state.items = [];
        })

        builder.addCase(fetchSortedAnime.pending, (state) => {
            state.sortedItems = [];
        })

        builder.addCase(fetchSortedAnime.fulfilled, (state, action: PayloadAction<AnimeItem[]>) => {
            state.sortedItems = action.payload;
        })

        builder.addCase(fetchSortedAnime.rejected, (state) => {
            state.sortedItems = [];
        })
    }
})

export const { } = AnimeSlice.actions;

export default AnimeSlice.reducer;