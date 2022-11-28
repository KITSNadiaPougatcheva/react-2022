import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
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

  test("renders footer", () => {
    const details = { id: "12345", title: "Test Movie" };

    const { getByText } = render(
      <Provider store={store}>
        <EditMovie details={details} />
      </Provider>
    );
    const x = getByText(/Edit/i);
    screen.debug();
    expect(x).toBeInTheDocument();
  });
});
