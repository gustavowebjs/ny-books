import { render, screen, fireEvent } from "@testing-library/react";
import { DarkSwitch } from "../../../components/common/DarkSwitch/DarkSwitch";
import { describe, expect, test, vi, beforeEach } from "vitest";

const makeSut = () => {
  return render(<DarkSwitch />);
};

describe("DarkSwitch Component", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
      })),
    });
  });

  test("should toggle theme and update UI accordingly", () => {
    makeSut();
    const button = screen.getByRole("button");

    let icon = button.querySelector("svg path");
    expect(icon?.getAttribute("d")).toContain("M12 3v1m0 16v1m9-9h-1M4");
    expect(localStorage.getItem("theme")).toBe("light");
    expect(document.documentElement.classList.contains("dark")).toBe(false);

    fireEvent.click(button);
    icon = button.querySelector("svg path");
    expect(icon?.getAttribute("d")).toContain(
      "M20.354 15.354A9 9 0 018.646 3.646"
    );
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  test("should initialize with saved theme from localStorage", () => {
    localStorage.setItem("theme", "dark");
    makeSut();

    expect(document.documentElement.classList.contains("dark")).toBe(true);
    const icon = screen.getByRole("button").querySelector("svg path");
    expect(icon?.getAttribute("d")).toContain(
      "M20.354 15.354A9 9 0 018.646 3.646"
    );
  });
});
