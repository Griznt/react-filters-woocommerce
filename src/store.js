import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer/root-reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./middleware/root-saga";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export const dispatch = action => store.dispatch(action);

sagaMiddleware.run(rootSaga);
