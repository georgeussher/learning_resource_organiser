import React from "react";
import { render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import { Root } from "./routes/root.jsx";

test("renders the new button", function () {
  render(<Root />);
  const linkElement = screen.getByText(/New/i);
  expect(linkElement).toBeInTheDocument();
}
)