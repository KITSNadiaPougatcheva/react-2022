import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MovieService } from "../../../utils/MovieService";
import { MovieCard } from "./MovieCard";

const mockStore = configureMockStore([thunk]);
const mockUseLocationValue = {
  key: "",
  pathname: "/search",
  search: "",
  hash: "",
  state: null
};

const useNavigateMock = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as {}),
  useNavigate: jest.fn().mockImplementation(() => useNavigateMock),
  useParams: jest.fn().mockReturnValue({}),
  useLocation: jest.fn().mockImplementation(() => mockUseLocationValue)
}));

describe("MovieCard", () => {
  jest.spyOn(MovieService, "updateMovieAsync").mockResolvedValue({});
  jest.spyOn(MovieService, "findMoviesAsync").mockResolvedValue([]);
  jest.spyOn(MovieService, "getMovieDetails").mockResolvedValue({});

  const store = mockStore({
    isOpen: true
  });

  test("renders movie tile", async () => {
    const details = {
      id: "12345",
      title: "Test Movie",
      poster_path: "http://test.com/test-img.jpg",
      vote_average: 5,
      release_date: "2005/11/02"
    };

    render(
      <Router>
        <Provider store={store}>
          <MovieCard details={details} />
        </Provider>
      </Router>
    );
    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
    expect(screen.getByText("Test Movie")).toBeInTheDocument();
    expect(
      screen.getByText("Rating : 5 | Release date : 2005/11/02")
    ).toBeInTheDocument();
    expect(screen.getByAltText(details.title)).toBeInTheDocument();

    // run showMovieDetails
    await act(async () => {
      fireEvent.click(screen.getByAltText(details.title));
    });

    expect(useNavigateMock).toBeCalled();
    expect(MovieService.findMoviesAsync).toBeCalled();
  });
});
