import Monument from "../Monument.js";
import { MonumentStructure } from "../types.js";

const colosseumOfRome = new Monument(
  "Colosseum of Rome",
  "The Colosseum of Rome is an amphitheater from the time of the Roman Empire, built in the 1st century and located in the center of the city of Rome.",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/2560px-Colosseo_2020.jpg",
  { country: "Italy", city: "Rome" },
);

const eiffelTower = new Monument(
  "Eiffel Tower",
  "The Eiffel Tower is an iron tower located in Paris, France, built in 1889 as an entrance to the Universal Exposition. It is one of the world's most iconic monuments.",
  "https://media.cnn.com/api/v1/images/stellar/prod/170801114832-eiffel-tower-guide-base.jpg?q=w_2187,h_1458,x_0,y_0,c_fill",
  { country: "France", city: "Paris" },
);

const greatWallOfChina = new Monument(
  "Great Wall of China",
  "The Great Wall of China is a series of fortifications that stretch across several Chinese provinces. It was built to protect the Chinese Empire from invasion during the Qin and Ming dynasties.",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/2560px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg",
  { country: "China", city: "Beijing" },
);

const tajMahal = new Monument(
  "Taj Mahal",
  "The Taj Mahal is a white marble mausoleum located in Agra, India, built between 1632 and 1653. It was commissioned by Emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
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
