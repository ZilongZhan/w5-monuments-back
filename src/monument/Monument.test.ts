import Monument from "./Monument.js";

describe("Given the Golden Gate Bridge", () => {
  describe("When it is instanciated", () => {
    test("Then it should be in San Francisco, USA", () => {
      const expectedCity = "San Francisco";
      const expectedCountry = "USA";

      const goldenGateBridge = new Monument({
        name: "",
        description: "",
        imageUrl: "",
        city: "San Francisco",
        country: "USA",
      });

      expect(goldenGateBridge.city).toBe(expectedCity);
      expect(goldenGateBridge.country).toBe(expectedCountry);
    });

    test("Then it should be called 'Golden Gate Bridge'", () => {
      const expectedName = "Golden Gate Bridge";

      const goldenGateBridge = new Monument({
        name: "Golden Gate Bridge",
        description: "",
        imageUrl: "",
        city: "",
        country: "",
      });

      expect(goldenGateBridge.name).toBe(expectedName);
    });

    test("Then it should be described as 'A ginormous red bridge located in San Francisco'", () => {
      const expectedDescription =
        "A ginormous red bridge located in San Francisco";

      const goldenGateBridge = new Monument({
        name: "",
        description: "A ginormous red bridge located in San Francisco",
        imageUrl: "",
        city: "",
        country: "",
      });

      expect(goldenGateBridge.description).toBe(expectedDescription);
    });
  });
});
