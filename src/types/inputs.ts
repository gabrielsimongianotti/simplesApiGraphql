import { Coordinates, Weather } from "./generic";

export interface InputCity {
  id: String;
  name: String,
  country: String,
  coord?: Coordinates,
  weather?: Weather
}