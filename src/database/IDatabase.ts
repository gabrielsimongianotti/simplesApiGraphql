import { City } from "types";

export default interface IDatabase {
  get (): City[];
  set (data: City[]): void;
}
