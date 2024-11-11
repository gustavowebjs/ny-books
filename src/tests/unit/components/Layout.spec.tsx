import { render, screen } from "@testing-library/react";
import { Layout } from "../../../components/templates/layout";
import { describe, expect, test, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";

vi.mock("../../../components/common/DarkSwitch", () => ({
  DarkSwitch: () => <div data-testid="dark-switch">Dark Switch</div>,
}));

const makeSut = () => {
  return render(
    <BrowserRouter>
      <Layout>
        <div data-testid="child-content">Test Content</div>
      </Layout>
    </BrowserRouter>
  );
};

describe("Layout Component", () => {
  test("should render", () => {
    const { container } = makeSut();
    expect(container).toBeDefined();
  });

  test("should render the logo text", () => {
    makeSut();
    expect(screen.getByText("NY Books")).toBeInTheDocument();
  });

  test("should render navigation links", () => {
    makeSut();
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /books/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
  });

  test("should render children content", () => {
    makeSut();
    expect(screen.getByTestId("child-content")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  test("should render dark mode switch", () => {
    makeSut();
    expect(screen.getByTestId("dark-switch")).toBeInTheDocument();
  });

  test("should have correct header styling", () => {
    makeSut();
    const header = screen.getByRole("banner");
    expect(header).toHaveClass(
      "bg-white",
      "dark:bg-gray-800",
      "border-b",
      "fixed"
    );
  });

  test("should have correct main content styling", () => {
    makeSut();
    const main = screen.getByRole("main");
    expect(main).toHaveClass(
      "flex-grow",
      "mt-16",
      "p-4",
      "bg-white",
      "dark:bg-gray-900"
    );
  });

  test("should render navigation links with correct styling", () => {
    makeSut();
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toHaveClass(
      "rounded-md",
      "px-2",
      "py-1",
      "hover:bg-blue-200",
      "dark:hover:bg-blue-900"
    );
  });

  test("should have correct layout structure", () => {
    makeSut();
    const layout =
      screen.getByTestId("child-content").parentElement?.parentElement;
    expect(layout).toHaveClass("min-h-screen", "flex", "flex-col");
  });
});
