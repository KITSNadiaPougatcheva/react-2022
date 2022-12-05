import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MovieService } from "../../../utils/MovieService";
import { DeleteMovie } from "./DeleteMovie";

const mockStore = configureMockStore([thunk]);
describe("DeleteMovie", () => {
  jest.spyOn(MovieService, "deleteMovieAsync").mockResolvedValue();
  const store = mockStore({});

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders DeleteMovie form and call service method ob submit", () => {
    const details = { id: "12345", title: "Test Movie" };

    render(
      <Provider store={store}>
        <DeleteMovie details={details} />
      </Provider>
    );
    expect(screen.getByText("Delete")).toBeInTheDocument();

    // show 'Delete Movie' form
    fireEvent.click(screen.getByText("Delete"));
    expect(screen.getByText("Delete Movie")).toBeInTheDocument();
    expect(screen.getByDisplayValue("submit")).toBeInTheDocument();

    // submit deletion
    fireEvent.click(screen.getByDisplayValue("submit"));
    expect(MovieService.deleteMovieAsync).toBeCalled();
  });

  test("renders DeleteMovie form and close form on cancel", () => {
    const details = { id: "12345", title: "Test Movie" };

    render(
      <Provider store={store}>
        <DeleteMovie details={details} />
      </Provider>
    );
    expect(screen.getByText("Delete")).toBeInTheDocument();

    // show 'Delete Movie' form
    fireEvent.click(screen.getByText("Delete"));
    expect(screen.getByText("Delete Movie")).toBeInTheDocument();
    expect(screen.getByDisplayValue("submit")).toBeInTheDocument();

    // cancel deletion
    fireEvent.click(screen.getByDisplayValue("cancel"));
    expect(MovieService.deleteMovieAsync).not.toBeCalled();
    expect(screen.queryByText("Delete Movie")).toBeNull();
  });
});
