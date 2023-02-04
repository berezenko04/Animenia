import axios from "axios";
import { AnimeItem } from "@/redux/anime/types";
import { NewsItem } from "@/redux/news/types";

const DEFAULT__API__PATH = 'https://63dd5ffb367aa5a7a40ed9d2.mockapi.io/api/v1';
const ANIME = 'anime';
const NEWS = 'news'


export const getAnime = async () => {
    const { data } = await axios.get(`${DEFAULT__API__PATH}/${ANIME}`);
    return data as AnimeItem[];
}

export const getNews = async () => {
    const { data } = await axios.get(`${DEFAULT__API__PATH}/${NEWS}`);
    return data as NewsItem[];
}