export type AnimeItem = {
    id: string,
    title: string,
    imageUrl: string,
    rating: number,
    genre: string,
    description: string,
    screenshots: string[],
    videoUrl: string
}

export type FetchParams = {
    sort: string,
}

export interface AnimeSliceState {
    items: AnimeItem[]
    sortedItems: AnimeItem[],
    itemsStatus: string,
    sortedItemsStatus: string
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}