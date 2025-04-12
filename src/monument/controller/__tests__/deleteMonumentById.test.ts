import { Request, Response } from "express";
import {
  myNeighborIgnaciosHouse,
  myNeighborMariasHouse,
} from "../../fixtures.js";
import MonumentController from "../MonumentController.js";
import Monument from "../../Monument.js";

describe("Given the MonumentController's deleteMonumentById method", () => {
  let monuments: Monument[];
  let monumentController: MonumentController;

  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as Pick<Response, "status" | "json">;

  beforeEach(() => {
    monuments = [myNeighborIgnaciosHouse, myNeighborMariasHouse];
    monumentController = new MonumentController(monuments);

    jest.clearAllMocks();
  });

  describe("When it receives a request with my neighbor Maria's house's ID as params", () => {
    const req = {
      params: {
        monumentId: "mariasHouseId",
      },
    } as Pick<Request, "params">;

    test("Then it should call the response's status method with status code 200", () => {
      const expectedStatusCode = 200;

      monumentController.deleteMonumentById(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's json method with my neighbor Maria's house", () => {
      const expectedResponse = myNeighborMariasHouse;

      monumentController.deleteMonumentById(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedResponse);
    });

    test("Then my neighbor Maria's house should not be in the monuments anymore", () => {
      monumentController.deleteMonumentById(req as Request, res as Response);

      expect(monuments).not.toContain(myNeighborMariasHouse);
    });
  });

  describe("When it receives a request with my neighbor Obadiah's house's ID which does not exist", () => {
    const req = {
      params: {
        monumentId: "obadiahsHouseId",
      },
    } as Pick<Request, "params">;

    test("Then it should call the response's status method status code 404", () => {
      const expectedStatusCode = 404;

      monumentController.deleteMonumentById(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's json method with error message 'Monument doesn't exist'", () => {
      const expectedErrorMessage = {
        error: "Monument doesn't exist",
      };

      monumentController.deleteMonumentById(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedErrorMessage);
    });
  });
});
