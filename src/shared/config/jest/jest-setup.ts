import "@testing-library/jest-dom";
import React from "react";
import type environmentMeta from "@/shared/const/environment.meta";

jest.mock("@/shared/const/environment.meta", (): typeof environmentMeta => ({
  SSR: false,
  CLIENT: true,
  PROD: true,
  MODE: "production",
  STORYBOOK: false,
  TEST: true,
}));

global.React = React;
