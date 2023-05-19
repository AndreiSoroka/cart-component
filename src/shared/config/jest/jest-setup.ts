import "@testing-library/jest-dom";
import React from "react";

jest.mock("@/shared/const/environment.meta", () => ({
  SSR: false,
  CLIENT: true,
  PROD: true,
  MODE: "production",
  STORYBOOK: false,
}));

global.React = React;
