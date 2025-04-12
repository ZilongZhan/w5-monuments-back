import type { Config } from "jest";
import { createDefaultPreset } from "ts-jest";

const config: Config = {
  rootDir: "src",
  resolver: "ts-jest-resolver",
  verbose: true,
  collectCoverage: false,
  collectCoverageFrom: ["**/*.ts", "!index.ts", "**/types.*"],
  coverageDirectory: "../coverage",
  ...createDefaultPreset(),
};

export default config;
