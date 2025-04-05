import Monument from "../Monument.js";
import { MonumentStructure } from "../types.js";

const colosseumOfRome = new Monument(
  "Colosseum of Rome",
  "The Colosseum of Rome is an amphitheater from the time of the Roman Empire, built in the 1st century and located in the center of the city of Rome.",
  "/images/romancolosseum.webp",
  { country: "Italy", city: "Rome" },
);

const eiffelTower = new Monument(
  "Eiffel Tower",
  "The Eiffel Tower is an iron tower located in Paris, France, built in 1889 as an entrance to the Universal Exposition. It is one of the world's most iconic monuments.",
  "/images/eiffeltower.webp",
  { country: "France", city: "Paris" },
);

const greatWallOfChina = new Monument(
  "Great Wall of China",
  "The Great Wall of China is a series of fortifications that stretch across several Chinese provinces. It was built to protect the Chinese Empire from invasion during the Qin and Ming dynasties.",
  "/images/greatwallofchina.webp",
  { country: "China", city: "Beijing" },
);

const tajMahal = new Monument(
  "Taj Mahal",
  "The Taj Mahal is a white marble mausoleum located in Agra, India, built between 1632 and 1653. It was commissioned by Emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
  "/images/tajmahal.webp",
  { country: "India", city: "Agra" },
);

const monuments: MonumentStructure[] = [
  colosseumOfRome,
  eiffelTower,
  greatWallOfChina,
  tajMahal,
];

export default monuments;
