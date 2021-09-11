import { City, InputCity } from 'types';
import { uuid } from 'uuidv4';
import database from "../database";
const { set, get } = new database()

module.exports = {
  Mutation: {
    CreateCity: (_: any, { city }: { city: InputCity }): InputCity => {
      const newCity = { ...city, id: uuid() };
      const cities = get()
      cities.push(newCity);
      set(cities);
      return newCity;
    },
    UpdateCity: (_: any, { updataCity }: { updataCity: InputCity }): City[] => {
      const cities = get()
      cities.map(city => city.id === updataCity.id ? updataCity : city)
      set(cities);
      return cities;
    },
    DeleteCity: (_: any, { id }: { id: string }) => {
      const cities = get()
      const newCities:City[] = cities.filter((city) => city.id !== id);
      set(newCities);
      return id
    }
  }
}