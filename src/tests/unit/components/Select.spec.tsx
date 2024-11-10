import { render, fireEvent } from "@testing-library/react";
import { Select, SelectProps } from "../../../components/common/Select/Select";
import { describe, expect, test, vi } from "vitest";

const makeSut = (props: Partial<SelectProps>) => {
  return render(
    <Select {...props}>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </Select>
  );
};

describe("Select Component", () => {
  test("should render", () => {
    const { container } = makeSut({});
    expect(container).toBeDefined();
  });

  test("should render options", () => {
    const { getByText } = makeSut({});
    expect(getByText("Option 1")).toBeDefined();
    expect(getByText("Option 2")).toBeDefined();
  });

  test("should have label when provided", () => {
    const { getByText } = makeSut({ label: "Test Label" });
    expect(getByText("Test Label")).toBeDefined();
  });

  test("should show error message when provided", () => {
    const { getByText } = makeSut({ error: "Error message" });
    expect(getByText("Error message")).toBeDefined();
  });

  test("should have error styles when error is provided", () => {
    const { container } = makeSut({ error: "Error message" });
    const selectElement = container.querySelector("select");
    expect(selectElement).toHaveClass("border-red-500");
  });

  test("should have class when provided", () => {
    const { container } = makeSut({ className: "test-class" });
    const selectElement = container.querySelector("select");
    expect(selectElement).toHaveClass("test-class");
  });

  test("should be disabled when disabled prop is true", () => {
    const { container } = makeSut({ disabled: true });
    const selectElement = container.querySelector("select");
    expect(selectElement).toBeDisabled();
  });

  test("should have fullWidth when prop is true", () => {
    const { container } = makeSut({ fullWidth: true });
    const selectElement = container.querySelector("select");
    expect(selectElement).toHaveClass("w-full");
  });

  test("should call onChange when value changes", () => {
    const onChange = vi.fn();
    const { container } = makeSut({ onChange });
    const selectElement = container.querySelector(
      "select"
    ) as HTMLSelectElement;

    fireEvent.change(selectElement, { target: { value: "2" } });
    expect(onChange).toHaveBeenCalled();
  });
});
