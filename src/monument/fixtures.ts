import Monument from "./Monument.js";

const myNeighborMariasHouse = new Monument(
  "Maria's house",
  "An old house that is otherwise normal",
  "http://mariashouse.com/house.webp",
  { city: "Mariapolis", country: "Marialand" },
);

const myNeighborIgnaciosHouse = new Monument(
  "Ignacio's house",
  "A modern house that is otherwise normal",
  "http://ignacioshouse.com/house.webp",
  { city: "Ignaciopolis", country: "Ignaciolandia" },
);

export { myNeighborIgnaciosHouse, myNeighborMariasHouse };
