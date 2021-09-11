import { Coordinates, Weather } from "./generic";

export interface City {
  id?: String | null,
  name: String,
  country: String,
  coord?: Coordinates,
  weather?: Weather
}
