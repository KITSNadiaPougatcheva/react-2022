import "@testing-library/jest-dom";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor
} from "@testing-library/react";
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

  afterEach(jest.clearAllMocks);

  test("renders AddMovie form and close it by clicking 'cancel'", () => {
    render(
      <Provider store={store}>
        <AddMovie />
      </Provider>
    );

    //screen.debug()
    expect(screen.getByText("Add movie")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Add movie" })
    ).toBeInTheDocument();

    // show AddMovie form
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getAllByRole("textbox").length).toEqual(4);
    expect(screen.getAllByText("Add movie").length).toEqual(1);

    // cancel form
    fireEvent.click(screen.getByDisplayValue("cancel"));
    expect(screen.queryByText("cancel")).toBeNull();
    expect(screen.queryByDisplayValue("cancel")).toBeNull();
  });

  test("renders AddMovie form and submit it by clicking 'submit' with non-valid data", async () => {
    render(
      <Provider store={store}>
        <AddMovie />
      </Provider>
    );

    expect(screen.getByText("Add movie")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Add movie" })
    ).toBeInTheDocument();

    // show AddMovie form
    act(() => {
      fireEvent.click(screen.getByRole("button"));
    });
    expect(screen.getAllByRole("textbox").length).toEqual(4);
    expect(screen.getAllByText("Add movie").length).toEqual(1);

    // submit empty form and check the error
    await act(async () => {
      fireEvent.click(screen.getByDisplayValue("submit"));
    });
    await waitFor(() => {
      expect(screen.getByDisplayValue("cancel")).toBeInTheDocument();
    });
    expect(screen.getByDisplayValue("submit")).toBeInTheDocument();
  });

  test("renders AddMovie form and submit it by clicking 'submit' with valid data", async () => {
    render(
      <Provider store={store}>
        <AddMovie />
      </Provider>
    );

    // show AddMovie form
    act(() => {
      fireEvent.click(screen.getByRole("button"));
    });

    // submit non-empty form
    fireEvent.change(screen.getAllByRole("textbox")[0], {
      target: { value: "NEWTITLE" }
    });
    fireEvent.change(screen.getAllByRole("textbox")[1], {
      target: { value: "Some description" }
    });
    fireEvent.change(screen.getAllByRole("textbox")[2], {
      target: { value: 6 }
    });

    await act(async () => {
      fireEvent.click(screen.getByDisplayValue("submit"));
    });
    await waitFor(() => {
      expect(screen.queryByDisplayValue("cancel")).toBeNull();
    });
    expect(screen.queryByDisplayValue("submit")).toBeNull();
  });
});
