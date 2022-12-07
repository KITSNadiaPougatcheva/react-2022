import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import menu from "../../../data/menu";
import { Navigation } from "./Navigation";

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

describe("Navigation", () => {
  const store = mockStore({});

  test("renders Navigation", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Navigation />
      </Provider>
    );

    expect(getByText(`${menu[0].title}`)).toBeInTheDocument();
    expect(getByText(`${menu[1].title}`)).toBeInTheDocument();
    expect(getByText(`${menu[2].title}`)).toBeInTheDocument();
    expect(getByText(`${menu[3].title}`)).toBeInTheDocument();
  });
});
