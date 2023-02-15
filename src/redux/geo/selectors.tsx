import { RootState } from "../store";

export const countrySelector = (state: RootState) => state.geo.country;
export const citySelector = (state: RootState) => state.geo.city;