import { v4 as uuidv4 } from "uuid";
import { Location, MonumentStructure } from "./types.js";

class Monument implements MonumentStructure {
  public id: string;
  public country: string;
  public city: string;

  constructor(
    public name: string,
    public description: string,
    public imageUrl: string,
    { country, city }: Location,
  ) {
    this.id = uuidv4();
    this.country = country;
    this.city = city;
  }
}

export default Monument;
