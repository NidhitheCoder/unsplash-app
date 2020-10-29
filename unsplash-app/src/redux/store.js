import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./rootReducer";
import thunk from 'redux-thunk';

const middlewares = [thunk];

export const store = createStore(rootReducer,applyMiddleware(...middlewares));
export const persistor = persistStore(store);
export default { store, persistor };
