import Monument from "../Monument.js";
import { MonumentStructure } from "../types.js";

const colosseumOfRome = new Monument({
  name: "Colosseum of Rome",
  description:
    "The Colosseum of Rome is an amphitheater from the time of the Roman Empire, built in the 1st century and located in the center of the city of Rome.",
  imageUrl:
    "https://media.discordapp.net/attachments/581220463473197066/1361123570108862625/Colosseo_2020_1.webp?ex=67fd9c9b&is=67fc4b1b&hm=69371495775271300517b09df5d103d89e3b398cd61ccd4715e57f118e673514&=&format=webp&width=1200&height=840",
  country: "Italy",
  city: "Rome",
});

const eiffelTower = new Monument({
  name: "Eiffel Tower",
  description:
    "The Eiffel Tower is an iron tower located in Paris, France, built in 1889 as an entrance to the Universal Exposition. It is one of the world's most iconic monuments.",
  imageUrl:
    "https://media.discordapp.net/attachments/581220463473197066/1361123569043509398/170801114832-eiffel-tower-guide-base_1.webp?ex=67fd9c9b&is=67fc4b1b&hm=29e1512c3b645a2ddbcd9c576daea52c7011ec18d97e537caff70ecd43faa37c&=&format=webp&width=1200&height=800",
  country: "France",
  city: "Paris",
});

const greatWallOfChina = new Monument({
  name: "Great Wall of China",
  description:
    "The Great Wall of China is a series of fortifications that stretch across several Chinese provinces. It was built to protect the Chinese Empire from invasion during the Qin and Ming dynasties.",
  imageUrl:
    "https://media.discordapp.net/attachments/581220463473197066/1361123569777774652/The_Great_Wall_of_China_at_Jinshanling-edit_1.webp?ex=67fd9c9b&is=67fc4b1b&hm=7a38680384eeb63b677de4fad5b87e255c1580581ad92281b788902494dd2b34&=&format=webp&width=1200&height=796",
  country: "China",
  city: "Beijing",
});

const tajMahal = new Monument({
  name: "Taj Mahal",
  description:
    "The Taj Mahal is a white marble mausoleum located in Agra, India, built between 1632 and 1653. It was commissioned by Emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
  imageUrl:
    "https://media.discordapp.net/attachments/581220463473197066/1361123569446420700/Taj_Mahal_Edited_1.webp?ex=67fd9c9b&is=67fc4b1b&hm=20d84f6dff859cbb34a06f2d95413eede829c2ba4f0b4e3047b6ce5d70e636cd&=&format=webp&width=1200&height=788",
  country: "India",
  city: "Agra",
});

const monuments: MonumentStructure[] = [
  colosseumOfRome,
  eiffelTower,
  greatWallOfChina,
  tajMahal,
];

export default monuments;
