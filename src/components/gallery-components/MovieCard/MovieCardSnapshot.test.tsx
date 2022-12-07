import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MovieCard } from "./MovieCard";

import { BrowserRouter as Router } from "react-router-dom";

const mockStore = configureMockStore([thunk]);
describe("MovieCard", () => {
  const store = mockStore({
    isOpen: true
  });

  test("renders movie tile", () => {
    const details = {
      id: "12345",
      title: "Test Movie",
      poster_path: "http://test.com/test-img.jpg",
      vote_average: 5,
      release_date: "2005/11/02"
    };

    const { asFragment } = render(
      <Router>
        <Provider store={store}>
          <MovieCard details={details} />
        </Provider>
      </Router>
    );
    expect(screen.getByText(/Edit/i)).toBeInTheDocument();
    expect(screen.getByText(/Delete/i)).toBeInTheDocument();
    expect(screen.getByAltText(details.title)).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
