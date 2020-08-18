import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducings";

const startingState = {};
const middleware = [thunk];

const quizEngineStore = createStore(
    rootReducer,
    startingState,
    compose(
        applyMiddleware(...middleware),
        (window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()) ||
          compose
      )
);

export default quizEngineStore;
