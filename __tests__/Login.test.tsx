import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LoginPage from "@/app/login/page";

describe("Login page", () => {
  it("renders email, password inputs and sign in button", () => {
    render(<LoginPage />);

    expect(screen.getByRole("heading", { name: "Login" })).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Sign In" })
    ).toBeInTheDocument();
  });

  it("shows an error message for invalid credentials", () => {
    render(<LoginPage />);

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "wrong@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "wrongpass" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Sign In" }));

    expect(screen.getByRole("status")).toHaveTextContent(
      "Invalid email or password."
    );
  });

  it("shows a success message for valid static credentials", () => {
    render(<LoginPage />);

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "admin@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Sign In" }));

    expect(screen.getByRole("status")).toHaveTextContent(
      "Login successful! Welcome, admin@example.com."
    );
  });
});

