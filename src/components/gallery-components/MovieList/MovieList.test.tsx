import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MovieList } from "./MovieList";

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

describe("MovieList", () => {
  const store = mockStore({
    movies: [
      {
        id: "12345",
        title: "Test Movie",
        overview: "Long description",
        poster_path: "http://test.com/test-img.jpg",
        vote_average: 5,
        release_date: "2005/11/02"
      }
    ]
  });

  afterEach(jest.clearAllMocks);

  test("renders MovieList", () => {
    render(
      <Provider store={store}>
        <MovieList />
      </Provider>
    );

    expect(screen.getAllByText("Delete").length).toBe(1);
    expect(screen.getByText("Test Movie")).toBeInTheDocument();
    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(
      screen.getByText("Rating : 5 | Release date : 2005/11/02")
    ).toBeInTheDocument();
    expect(screen.getByText("Edit")).toBeInTheDocument();
  });
});
