import { RootState } from "../store";

export const pageNumberSelector = (state: RootState) => state.pagination.pageNumber;