import axios from "axios";
import { AnimeItem } from "../redux/anime/types";

const DEFAULT__API__PATH = 'https://63dd5ffb367aa5a7a40ed9d2.mockapi.io/api/v1';
const ANIME = 'anime';


export const getAnime = async () => {
    const { data } = await axios.get(`${DEFAULT__API__PATH}/${ANIME}?sortBy=rating&order=desc`);
    return data as AnimeItem[];
}