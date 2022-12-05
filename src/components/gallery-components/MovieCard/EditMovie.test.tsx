import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { EditMovie } from "./EditMovie";

const mockStore = configureMockStore([thunk]);

describe("EditMovie", () => {
  const store = mockStore({
    isOpen: true
  });

  test("renders EditMovie form", () => {
    const details = {
      id: "12345",
      title: "Test Movie",
      poster_path: "http://test.com/test-img.jpg",
      vote_average: 5,
      release_date: "2005/11/02"
    };

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

    fireEvent.click(screen.getByText("cancel"));
    expect(screen.queryByText("Edit Movie")).toBeNull();
  });
});
