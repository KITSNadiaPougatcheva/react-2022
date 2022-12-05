import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MovieService } from "../../../utils/MovieService";
import { AddMovie } from "./AddMovie";

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

describe("AddMovie", () => {
  jest.spyOn(MovieService, "findMoviesAsync").mockResolvedValue([]);
  jest.spyOn(MovieService, "addMovieAsync").mockResolvedValue({});
  const store = mockStore({});

  test("renders AddMovie form", () => {
    render(
      <Provider store={store}>
        <AddMovie />
      </Provider>
    );

    screen.debug()
    expect(screen.getByText("Add movie")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Add movie"})).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button"));
    screen.debug()
    expect(screen.getAllByRole("textbox").length).toEqual(4);
    expect(screen.getAllByText("Add movie").length).toEqual(1);

//    expect(MovieService.findMoviesAsync).toBeCalled();
  });
});
