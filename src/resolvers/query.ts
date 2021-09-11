import { City } from "types";
import database from "../database";
const { get } = new database()

module.exports = {
  Query: {
    getCities: (): City[] => get(),
    getCityById: (_: any, { id }: { id: string }): City => {
      return get().filter((city) => city.id === id)[0]
    }
  }
}