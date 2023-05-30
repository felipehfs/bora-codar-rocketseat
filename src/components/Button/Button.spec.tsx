import { fireEvent, screen } from "@testing-library/react";
import Button from ".";
import { vi } from "vitest";
import { renderWithTheme } from "../../utils/renderWithTheme";

describe("components/Button", () => {
  it("should show a text message", () => {
    const message = "Hello world";
    renderWithTheme(<Button>{message}</Button>);

    const item = screen.getByText(message);
    expect(item).toBeInTheDocument();
  });

  it("should show a text message", () => {
    const message = "Hello world";
    const onClick = vi.fn();
    renderWithTheme(<Button onClick={onClick}>{message}</Button>);

    fireEvent.click(screen.getByText(message));

    expect(onClick).toHaveBeenCalled();
  });

  it("should show a loading spinner", () => {
    const onClick = vi.fn();
    renderWithTheme(
      <Button loading onClick={onClick}>
        Click me
      </Button>
    );

    expect(screen.getByLabelText("loading")).toBeVisible();
  });
});
