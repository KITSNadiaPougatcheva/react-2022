import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MovieDetailsHeader } from "./MovieDetailsHeader";

const mockStore = configureMockStore([thunk]);

const useNavigateMock = jest.fn();

const mockUseLocationValue = {
  key: "",
  pathname: "/search",
  search: "",
  hash: "",
  state: null
};

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as {}),
  useNavigate: jest.fn().mockImplementation(() => useNavigateMock),
  useParams: jest.fn().mockReturnValue({}),
  useLocation: jest.fn().mockImplementation(() => mockUseLocationValue)
}));

describe("MovieDetailsHeader", () => {
  test("renders MovieDetailsHeader with selected movie details", () => {
    const store = mockStore({
      showMovieDetails: true,
      selectedMovieDetails: { title: "TEST Movie" }
    });

    render(
      <Router>
        <Provider store={store}>
          <MovieDetailsHeader />
        </Provider>
      </Router>
    );
    expect(screen.findByText("netflix")).toBeDefined();
    expect(screen.findByText("TEST Movie")).toBeDefined();

    // close movie details
    fireEvent.click(screen.getByRole("button"));

    expect(useNavigateMock).toBeCalledWith(
      { pathname: "/search/", search: "?sortBy=&genre=&movie=" },
      { replace: true }
    );
  });

  test("does not render MovieDetailsHeader when no selected movie details", () => {
    const store = mockStore({
      showMovieDetails: false
    });

    render(
      <Router>
        <Provider store={store}>
          <MovieDetailsHeader />
        </Provider>
      </Router>
    );
    expect(screen.queryByText("netflix")).toBeNull();
    expect(screen.queryByText("TEST Movie")).toBeNull();
  });
});
