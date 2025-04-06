import { Request, Response } from "express";
import MonumentController from "../MonumentController.js";
import {
  myNeighborIgnaciosHouse,
  myNeighborMariasHouse,
} from "../../fixtures.js";

describe("Given the getAllMonuments function", () => {
  describe("When it receives a response", () => {
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
