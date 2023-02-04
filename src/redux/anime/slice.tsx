import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { getAnime } from '@/API/AnimeService';
import { AnimeItem, AnimeSliceState } from './types';

const initialState: AnimeSliceState = {
    items: []
}

export const fetchAnime = createAsyncThunk(
    'anime/fetchAnimeStatus',
    async () => {
        const anime = await getAnime();
        return anime;
    }
)

export const AnimeSlice = createSlice({
    name: 'anime',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        }
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
    }
})

export const { setItems } = AnimeSlice.actions;

export default AnimeSlice.reducer;