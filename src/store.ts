import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllMoviesAsync } from "./actions";
import { rootReducer } from "./reducer";

import thunk from "redux-thunk";

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

const configureStore = () => {
  return createStore(rootReducer, {}, composeEnhancers);
};

const store = configureStore();
store.dispatch(getAllMoviesAsync());

export default store;
