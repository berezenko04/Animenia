import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { getAnime, getSortedAnime } from '@/API/AnimeService';
import { AnimeItem, AnimeSliceState, FetchParams } from './types';

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
    async (params: FetchParams) => {
        const { sort } = params;
        const anime = await getSortedAnime(sort);
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

export const {} = AnimeSlice.actions;

export default AnimeSlice.reducer;