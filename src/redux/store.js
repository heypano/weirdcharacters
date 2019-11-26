import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reduxFreeze from "redux-freeze";
import _ from "lodash";
import rootReducer from "./reducers/rootReducer";

const logger = createLogger();
const middlewares = _.compact([thunk, reduxFreeze, logger]);
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
