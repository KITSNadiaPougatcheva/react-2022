import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MovieService } from "../../../utils/MovieService";
import { FindMovie } from "./FindMovie";

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

describe("FindMovie", () => {
  jest.spyOn(MovieService, "findMoviesAsync").mockResolvedValue([]);
  const store = mockStore({});

  test("renders FindMovie form and navigate to results page", () => {
    render(
      <Provider store={store}>
        <FindMovie />
      </Provider>
    );
    expect(screen.getByText("Find movie")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("What do you want to watch ?")
    ).toBeInTheDocument();

    fireEvent.change(screen.getByRole("textbox"), { target: { value: "the" } });
    fireEvent.click(screen.getByText("Find movie"));

    expect(useNavigateMock).toBeCalledWith(
      { pathname: "/search/the", search: "?sortBy=&genre=&movie=" },
      { replace: true }
    );
    expect(MovieService.findMoviesAsync).toBeCalled();
  });
});
