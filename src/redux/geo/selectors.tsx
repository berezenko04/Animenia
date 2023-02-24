import { RootState } from "../store";

export const countrySelector = (state: RootState) => state.geo.country;