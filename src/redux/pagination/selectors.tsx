import { RootState } from "../store";

export const pageNumberSelector = (state: RootState) => state.pagination.pageNumber;
export const pageCountNumberSelector = (state: RootState) => state.pagination.pageCount;
export const pageRangeSelector = (state: RootState) => state.pagination.range;