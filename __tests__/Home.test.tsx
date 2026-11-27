import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders the CI/CD demo heading and sections", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: "Next.js CI/CD Demo" })
    ).toBeInTheDocument();
    expect(screen.getByText("CI/CD Live on Netlify")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "1. Continuous Integration" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "2. Continuous Deployment" })
    ).toBeInTheDocument();
  });
});

