import { Request, Response } from "express";
import MonumentController from "../MonumentController.js";
import Monument from "../../Monument.js";

describe("Given the getAllMonuments function", () => {
  describe("When it receives a response", () => {
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
    const monuments = [myNeighborMariasHouse, myNeighborIgnaciosHouse];

    const monumentController = new MonumentController(monuments);

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Pick<Response, "status" | "json">;

    afterEach(() => {
      jest.clearAllMocks();
    });

    test("Then it should call the response's status method with status code 200", () => {
      const expectedStatusCode = 200;

      monumentController.getAllMonuments(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's json method with maria's house and ignacio's house", () => {
      const expectedMonuments = {
        monuments: [myNeighborMariasHouse, myNeighborIgnaciosHouse],
      };

      monumentController.getAllMonuments(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedMonuments);
    });
  });
});
