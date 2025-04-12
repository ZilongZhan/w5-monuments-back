import Monument from "./Monument.js";

const myNeighborMariasHouse = new Monument(
  {
    name: "Maria's house",
    description: "An old house that is otherwise normal",
    imageUrl: "http://mariashouse.com/house.webp",
    city: "Mariapolis",
    country: "Marialand",
  },
  () => "mariasHouseId",
);

const myNeighborIgnaciosHouse = new Monument(
  {
    name: "Ignacio's house",
    description: "A modern house that is otherwise normal",
    imageUrl: "http://ignacioshouse.com/house.webp",
    city: "Ignaciopolis",
    country: "Ignaciolandia",
  },
  () => "ignaciosHouseId",
);

export { myNeighborIgnaciosHouse, myNeighborMariasHouse };
