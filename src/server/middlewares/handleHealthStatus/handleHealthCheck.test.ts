import { Request, Response } from "express";
import handleHealthCheck from "./handleHealthCheck.js";

describe("Given the handleHealthCheck middleware", () => {
  describe("When it receives any request and any response", () => {
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as Pick<Response, "status" | "send">;

    afterEach(() => {
      jest.clearAllMocks();
    });

    test("Then it should call the response's status method with status code 200", () => {
      const expectedStatusCode = 200;

      handleHealthCheck(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's send method with response 'GÜINO'", () => {
      const expectedResponse = "GÜINO";

      handleHealthCheck(req as Request, res as Response);

      expect(res.send).toHaveBeenCalledWith(expectedResponse);
    });
  });
});
