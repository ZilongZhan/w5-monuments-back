import { MonumentStructure } from "../types.js";

class MonumentController {
  constructor(private monuments: MonumentStructure[]) {}

  getAllMonuments(): MonumentStructure[] {
    return this.monuments;
  }
}

export default MonumentController;
