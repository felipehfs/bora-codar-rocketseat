import { render } from "@testing-library/react";
import { RenderOptions } from "@testing-library/react";
import React from "react";
import CustomTheme from "../styles/CustomTheme";

export function renderWithTheme(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) {
  render(ui, {
    ...options,
    wrapper: CustomTheme,
  });
}
