import { Status } from "../anime/types"

export type NewsItem = Record<string, string>

export interface NewsState {
    items: NewsItem[],
    status: Status.LOADING | Status.SUCCESS | Status.ERROR
}