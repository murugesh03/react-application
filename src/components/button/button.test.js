import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from ".";

describe("Button Component", () => {
  test("renders button with text", () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders disabled button", () => {
    render(<Button disabled={true}>Disabled Button</Button>);
    const buttonElement = screen.getByTestId("custom-button");
    expect(buttonElement).toBeDisabled();
  });

  test("applies custom className", () => {
    render(<Button className="custom-class">Styled Button</Button>);
    const buttonElement = screen.getByRole("button", {
      name: /styled button/i
    });
    expect(buttonElement).toHaveClass("custom-class");
  });

  test("renders different button variants", () => {
    render(<Button variant="primary">Primary</Button>);
    const buttonElement = screen.getByRole("button", { name: /primary/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
