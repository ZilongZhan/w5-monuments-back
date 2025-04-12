import { v4 as uuidv4 } from "uuid";
import { MonumentData, MonumentStructure } from "./types.js";

class Monument implements MonumentStructure {
  public id: string;
  public name: string;
  public description: string;
  public imageUrl: string;
  public city: string;
  public country: string;

  constructor(
    { name, description, imageUrl, country, city }: MonumentData,
    getMonumentId: () => string = uuidv4,
  ) {
    this.id = getMonumentId();
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.country = country;
    this.city = city;
  }
}

export default Monument;
