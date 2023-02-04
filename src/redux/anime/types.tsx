export type AnimeItem = {
    id: string,
    title: string,
    imageUrl: string,
    rating: number,
    genre: string
}

export type FetchParams = {
    sorted: boolean,
    limit: number
}

export interface AnimeSliceState {
    items: AnimeItem[]
}