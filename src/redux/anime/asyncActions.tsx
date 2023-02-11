import { getAnime, getSortedAnime, SortedAnimeProps } from '@/API/AnimeService';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAnime = createAsyncThunk(
    'anime/fetchAnime',
    async () => {
        const anime = await getAnime();
        return anime;
    }
)

export const fetchSortedAnime = createAsyncThunk(
    'anime/fetchSortedAnime',
    async (params: SortedAnimeProps) => {
        const { sort, order, page, limit } = params;
        const anime = await getSortedAnime(sort, order, page, limit);
        return anime;
    }
)
