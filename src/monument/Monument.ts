import { v4 as uuidv4 } from "uuid";
import { Location, MonumentStructure } from "./types.js";

class Monument implements MonumentStructure {
  public id: string;

  constructor(
    public name: string,
    public description: string,
    public imageUrl: string,
    public location: Location,
  ) {
    this.id = uuidv4();
  }
}

export default Monument;
