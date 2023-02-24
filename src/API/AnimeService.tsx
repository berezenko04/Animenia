import axios from "axios";

//redux
import { AnimeItem } from "@/redux/anime/types";
import { NewsItem } from "@/redux/news/types";

const DEFAULT__API__PATH = 'https://63dd5ffb367aa5a7a40ed9d2.mockapi.io/api/v1';
const ANIME = 'anime';
const NEWS = 'news'


export type SortedAnimeProps = {
    sort: string,
    page: number,
    order: string,
    limit: number
}

export const getAnime = async () => {
    const { data } = await axios.get<AnimeItem[]>(`${DEFAULT__API__PATH}/${ANIME}`);
    return data;
}

export const getNews = async () => {
    const { data } = await axios.get<NewsItem[]>(`${DEFAULT__API__PATH}/${NEWS}`);
    return data;
}

export const getSortedAnime = async (sort: string, order: string, page: number, limit: number) => {
    const { data } = await axios.get<AnimeItem[]>(`${DEFAULT__API__PATH}/${ANIME}?sortBy=${sort}&order=${order}&page=${page}&limit=${limit}`);
    return data;
}

