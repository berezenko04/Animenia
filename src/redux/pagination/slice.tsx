import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { PageSliceState } from "./types";

const initialState: PageSliceState = {
    pageNumber: 1
}

export const PaginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.pageNumber = action.payload;
        }
    }
})


export const { setPage } = PaginationSlice.actions;

export default PaginationSlice.reducer;