import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { NewsItem, NewsState } from "./types";

const initialState: NewsState = {
    items: []
}

export const NewsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<NewsItem[]>) {
            state.items = action.payload;
        }
    }
})

export const { setItems } = NewsSlice.actions;

export default NewsSlice.reducer;