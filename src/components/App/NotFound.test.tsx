import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { NotFound } from "./NotFound";

describe("NotFound", () => {
  test("renders NotFound page", () => {
    render(<NotFound />);
    expect(screen.getByText("NOT FOUND")).toBeInTheDocument();
  });
});
