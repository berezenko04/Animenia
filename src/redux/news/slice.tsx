import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Status } from "../anime/types";
import { fetchNews } from "./asyncActions";
import { NewsItem, NewsState } from "./types";

const initialState: NewsState = {
    items: [],
    status: Status.LOADING
}

export const NewsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchNews.pending, (state) => {
            state.items = [];
            state.status = Status.LOADING;
        })

        builder.addCase(fetchNews.fulfilled, (state, action: PayloadAction<NewsItem[]>) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        })

        builder.addCase(fetchNews.rejected, (state) => {
            state.items = [];
            state.status = Status.ERROR;
        })
    }
})

export default NewsSlice.reducer;