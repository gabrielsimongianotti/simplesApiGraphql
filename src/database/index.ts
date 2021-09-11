import { City } from '../types';
import IDatabase from './IDatabase';

let cities: City[] = [{
  "id": "254315",
  "name": "Rio",
  "country": "GR",
  "weather": {
    "summary": {
      "title": "Clouds",
      "description": "scattered clouds",
      "icon": "03n"
    },
    "temperature": {
      "actual": 0.84,
      "feelsLike": 84,
      "min": 0.84,
      "max": 24,
    },
    "wind": {
      "speed": 0.84,
      "deg": 228
    },
    "clouds": {
      "all": 43,
      "visibility": 10000,
      "humidity": 66
    },
    "timestamp": 1630796369
  },
  "coord": {
    "lon": 21.7833,
    "lat": 38.3
  }
}]

export default class database implements IDatabase {
  public get (): City[] {
    return cities;
  }

  public set (data: City[]): void {
    cities = data;
  }
}