export type AnimeItem = {
    id: string,
    title: string,
    imageUrl: string,
    rating: number,
    genre: string
}

export interface AnimeSliceState {
    items: AnimeItem[]
}