import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { PageSliceState } from "./types";

const initialState: PageSliceState = {
    pageNumber: 1,
    pageCount: 5,
    range: 4
}

export const PaginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.pageNumber = action.payload;
        },
        setPageCount(state, action: PayloadAction<number>) {
            state.pageCount = action.payload;
        },
        setRange(state, action: PayloadAction<number>) {
            state.range = action.payload;
        }
    }
})


export const { setPage, setPageCount, setRange } = PaginationSlice.actions;

export default PaginationSlice.reducer;