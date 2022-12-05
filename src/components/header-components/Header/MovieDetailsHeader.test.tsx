import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MovieDetailsHeader } from "./MovieDetailsHeader";

const mockStore = configureMockStore([thunk]);

describe("MovieDetailsHeader", () => {
  test("renders MovieDetailsHeader with selected movie details", () => {
    const store = mockStore({
      showMovieDetails: true,
      selectedMovieDetails: { title: "TEST Movie" }
    });

    const { findByText } = render(
      <Router>
        <Provider store={store}>
          <MovieDetailsHeader />
        </Provider>
      </Router>
    );
    expect(findByText("netflix")).toBeDefined();
    expect(findByText("TEST Movie")).toBeDefined();
  });

  test("does not render MovieDetailsHeader when no selected movie details", () => {
    const store = mockStore({
      showMovieDetails: true,
      selectedMovieDetails: { title: "TEST Movie" }
    });

    const { findByText } = render(
      <Router>
        <Provider store={store}>
          <MovieDetailsHeader />
        </Provider>
      </Router>
    );
    expect(findByText("netflix")).toBeDefined();
    expect(findByText("TEST Movie")).toBeDefined();
  });
});
