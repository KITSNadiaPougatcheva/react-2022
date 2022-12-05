import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { Footer } from "./Footer";

describe("Footer", () => {
  test("renders footer", () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/netflix/i)).toBeInTheDocument();
  });
});
