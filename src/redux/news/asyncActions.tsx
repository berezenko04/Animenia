import { getNews } from "@/API/AnimeService";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async () => {
        const news = await getNews();
        return news;
    }
)