import { render, fireEvent } from "@testing-library/react";
import { Button, ButtonProps } from "../../../components/common/Button/Button";
import { describe, expect, test, vi } from "vitest";
const makeSut = (props: Partial<ButtonProps>) => {
  return render(<Button {...props}>Click me</Button>);
};

describe("Button Component", () => {
  test("should render", () => {
    const { container } = makeSut({ children: "Click me" });
    expect(container).toBeDefined();
  });

  test("should have text", () => {
    const { getByText } = makeSut({ children: "Click me" });
    expect(getByText("Click me")).toBeDefined();
  });

  test("should have class", () => {
    const { container } = makeSut({ className: "test-class" });
    expect(container.firstChild).toHaveClass("test-class");
  });

  test("should have type", () => {
    const { container } = makeSut({ type: "button" });
    expect(container.firstChild).toHaveAttribute("type", "button");
  });

  test("should have onClick", () => {
    const onClick = vi.fn();
    const { container } = makeSut({ onClick });
    fireEvent.click(container.firstChild as HTMLElement);
    expect(onClick).toHaveBeenCalled();
  });

  test("should have variant", () => {
    const { container } = makeSut({ variant: "default" });
    expect(container.firstChild).toHaveClass("bg-blue-600");
    expect(container.firstChild).toHaveClass("hover:bg-blue-700");
  });

  test("should have size", () => {
    const { container } = makeSut({ size: "default" });
    expect(container.firstChild).toHaveClass("h-10");
    expect(container.firstChild).toHaveClass("px-4");
    expect(container.firstChild).toHaveClass("py-2");
  });

  test("should have fullWidth", () => {
    const { container } = makeSut({ fullWidth: true });
    expect(container.firstChild).toHaveClass("w-full");
  });
});
