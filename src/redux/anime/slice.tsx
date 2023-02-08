import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { getAnime, getSortedAnime, SortedAnimeProps } from '@/API/AnimeService';
import { AnimeItem, AnimeSliceState } from './types';

const initialState: AnimeSliceState = {
    items: [],
    sortedItems: []
}

export const fetchAnime = createAsyncThunk(
    'anime/fetchAnimeStatus',
    async () => {
        const anime = await getAnime();
        return anime;
    }
)

export const fetchSortedAnime = createAsyncThunk(
    'anime/fetchSortedAnimeStatus',
    async (params: SortedAnimeProps) => {
        const { sort, order, page, limit } = params;
        const anime = await getSortedAnime(sort, order, page, limit);
        return anime;
    }
)

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