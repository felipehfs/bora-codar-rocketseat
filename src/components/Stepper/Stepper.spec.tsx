import { expect, vi } from "vitest";
import Stepper from ".";
import { renderWithTheme } from "../../utils/renderWithTheme";
import { fireEvent, screen } from "@testing-library/react";

describe("Components/Stepper", () => {
  it("should active a event on click", () => {
    const onClick = vi.fn();
    renderWithTheme(<Stepper value={1} onChange={onClick} />);

    fireEvent.click(screen.getByText("+"));

    expect(onClick).toHaveBeenCalled();
  });

  it("should be possible see the current value", () => {
    const onClick = vi.fn();
    const value = 1;
    renderWithTheme(<Stepper value={value} onChange={onClick} />);

    expect(screen.getByText(value, { exact: true })).toBeVisible();
  });
});
