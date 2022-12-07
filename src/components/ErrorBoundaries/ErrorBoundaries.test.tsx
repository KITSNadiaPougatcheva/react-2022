import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import ErrorBoundaries from "./ErrorBoundaries";

describe("NotFound", () => {
  test("renders NotFound page", () => {
    render(
      <ErrorBoundaries>
        <h1>12345</h1>
      </ErrorBoundaries>
    );
    expect(screen.getByText("12345")).toBeInTheDocument();
    expect(screen.queryByText("No movies found")).toBeNull();
  });
});
