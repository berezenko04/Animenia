export type AnimeItem = {
    id: string,
    title: string,
    imageUrl: string,
    rating: number,
    genre: string,
    description: string
}


export type FetchParams = {
    sort: string,
}

export interface AnimeSliceState {
    items: AnimeItem[]
    sortedItems: AnimeItem[],
}