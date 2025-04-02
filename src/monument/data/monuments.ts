import Monument from "../Monument.js";
import { MonumentStructure } from "../types.js";

const colosseumOfRome = new Monument(
  "Coliseo de Roma",
  "El Coliseo de Roma es un anfiteatro de la época del Imperio romano, construido en el siglo I y ubicado en el centro de la ciudad de Roma.",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/2560px-Colosseo_2020.jpg",
  { country: "Italia", city: "Roma" },
);

const eiffelTower = new Monument(
  "Torre Eiffel",
  "La Torre Eiffel es una torre de hierro situada en París, Francia, construida en 1889 como entrada a la Exposición Universal. Es uno de los monumentos más emblemáticos del mundo.",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Eiffelturm.JPG/1280px-Eiffelturm.JPG",
  { country: "Francia", city: "París" },
);

const greatWallOfChina = new Monument(
  "Gran Muralla China",
  "La Gran Muralla China es una serie de fortificaciones que se extienden a través de varias provincias chinas. Fue construida para proteger el Imperio chino de invasiones durante las dinastías Qin y Ming.",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/2560px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg",
  { country: "China", city: "Beijing" },
);

const tajMahal = new Monument(
  "Taj Mahal",
  "El Taj Mahal es un mausoleo de mármol blanco situado en Agra, India, construido entre 1632 y 1653. Fue encargado por el emperador Shah Jahan en memoria de su esposa Mumtaz Mahal.",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/2560px-Taj_Mahal_%28Edited%29.jpeg",
  { country: "India", city: "Agra" },
);

const monuments: MonumentStructure[] = [
  colosseumOfRome,
  eiffelTower,
  greatWallOfChina,
  tajMahal,
];

export default monuments;
