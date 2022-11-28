import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Footer } from "./Footer";

describe("Footer", () => {
  test("renders footer", () => {
    const { getByText } = render(<Footer />);
    const x = getByText(/netflix/i);
    screen.debug();
    expect(x).toBeInTheDocument();
  });
});
