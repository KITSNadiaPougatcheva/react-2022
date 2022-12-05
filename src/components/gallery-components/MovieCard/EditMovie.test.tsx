import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MovieService } from "../../../utils/MovieService";
import { EditMovie } from "./EditMovie";

const mockStore = configureMockStore([thunk]);

describe("EditMovie", () => {
  jest.spyOn(MovieService, "updateMovieAsync").mockResolvedValue({});
  jest.spyOn(MovieService, "findMoviesAsync").mockResolvedValue([]);

  const store = mockStore({});

  const details = {
    id: "12345",
    title: "Test Movie",
    overview: "Some description",
    poster_path: "http://test.com/test-img.jpg",
    vote_average: 5,
    release_date: "2005/11/02"
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders EditMovie form and updates Movie when 'submit' clicked", async () => {
    render(
      <Provider store={store}>
        <EditMovie details={details} />
      </Provider>
    );

    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.queryByText("Edit Movie")).toBeNull();

    // show Edit form
    fireEvent.click(screen.getByText("Edit"));

    expect(screen.getByText("Edit Movie")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Tagline")).toBeInTheDocument();
    expect(screen.getByText("Rating")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "cancel" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "submit" })).toBeInTheDocument();

    // click on 'submit'
    fireEvent.click(screen.getByDisplayValue("submit"));

    await waitFor(() => {
      expect(MovieService.updateMovieAsync).toBeCalled();
    });
    expect(screen.queryByText("Title")).toBeNull();
  });

  test("renders EditMovie form and do not update Movie when 'cancel' clicked", () => {
    render(
      <Provider store={store}>
        <EditMovie details={details} />
      </Provider>
    );

    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.queryByText("Edit Movie")).toBeNull();

    fireEvent.click(screen.getByText("Edit"));
    expect(screen.getByText("Edit Movie")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Tagline")).toBeInTheDocument();
    expect(screen.getByText("Rating")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "cancel" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "submit" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "cancel" }));
    expect(screen.queryByText("Edit Movie")).toBeNull();
    expect(MovieService.updateMovieAsync).not.toBeCalled();
  });
});
