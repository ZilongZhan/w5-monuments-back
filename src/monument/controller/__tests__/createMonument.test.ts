import { Request, Response } from "express";
import {
  myNeighborIgnaciosHouse,
  myNeighborMariasHouse,
} from "../../fixtures.js";
import MonumentController from "../MonumentController.js";
import { MonumentStructure } from "../../types.js";

describe("Given the createMonument function", () => {
  let monumentController: MonumentController;
  let monuments: MonumentStructure[];

  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as Pick<Response, "status" | "json">;

  beforeEach(() => {
    monuments = [myNeighborIgnaciosHouse];
    monumentController = new MonumentController(monuments);

    jest.clearAllMocks();
  });

  describe("When it receives a request with my neighbor Maria's house", () => {
    const req = {
      body: myNeighborMariasHouse,
    } as Pick<Request, "body">;

    test("Then it should call the response's status method with status code 201", () => {
      const expectedStatusCode = 201;

      monumentController.createMonument(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's json method with a monument named 'Maria's house'", () => {
      const expectedName = myNeighborMariasHouse.name;

      monumentController.createMonument(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ name: expectedName }),
      );
    });

    test("Then it should call the response's json method with a monument described as 'An old house that is otherwise normal'", () => {
      const expectedDescription = myNeighborMariasHouse.description;

      monumentController.createMonument(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ description: expectedDescription }),
      );
    });

    test("Then it should call the response's json method with a monument located in Mariapolis, Marialandia", () => {
      const expectedCity = myNeighborMariasHouse.city;
      const expectedCountry = myNeighborMariasHouse.country;

      monumentController.createMonument(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          city: expectedCity,
          country: expectedCountry,
        }),
      );
    });
  });

  describe("When it receives my neighbor Ignacio's house", () => {
    const req = {
      body: myNeighborIgnaciosHouse,
    } as Pick<Request, "body">;

    test("Then it should call the response's status method with status code 409", () => {
      const expectedStatusCode = 409;

      monumentController.createMonument(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's json method with error message 'Monument already exists'", () => {
      const expectedErrorMessage = { error: "Monument already exists" };

      monumentController.createMonument(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedErrorMessage);
    });
  });
});
