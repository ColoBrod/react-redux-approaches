import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import toast from "./middleware/toast";
// import func from "./middleware/func";

/**
 * Without redux-devtools-extension, we should use
 * window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 * as a second argument of createStore
 */
export default () => configureStore({ 
  reducer, 
  middleware: [
    ...getDefaultMiddleware(),
    logger,
    toast,
  ],
});

/**
 * If we don't use redux-toolkit, we can import { applyMiddleware } from 'redux'
 * Then createStore(reducer, applyMiddleware(logger, anotherMiddleware, ...));
 */