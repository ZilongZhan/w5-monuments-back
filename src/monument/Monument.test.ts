import Monument from "./Monument.js";

describe("Given the Golden Gate Bridge", () => {
  describe("When it is instanciated", () => {
    test("Then it should be in San Francisco, USA", () => {
      const goldenGateBridge = new Monument("", "", "", {
        city: "San Francisco",
        country: "USA",
      });
      const expectedCity = "San Francisco";
      const expectedCountry = "USA";

      const actualCity = goldenGateBridge.location.city;
      const actualCountry = goldenGateBridge.location.country;

      expect(actualCity).toBe(expectedCity);
      expect(actualCountry).toBe(expectedCountry);
    });

    test("Then it should be called 'Golden Gate Bridge'", () => {
      const goldenGateBridge = new Monument("Golden Gate Bridge", "", "", {
        city: "",
        country: "",
      });
      const expectedName = "Golden Gate Bridge";

      const actualName = goldenGateBridge.name;

      expect(actualName).toBe(expectedName);
    });

    test("Then it should be described as 'A ginormous red bridge located in San Francisco'", () => {
      const goldenGateBridge = new Monument(
        "",
        "A ginormous red bridge located in San Francisco",
        "",
        { city: "", country: "" },
      );
      const expectedDescription =
        "A ginormous red bridge located in San Francisco";

      const actualDescription = goldenGateBridge.description;

      expect(actualDescription).toBe(expectedDescription);
    });
  });
});
