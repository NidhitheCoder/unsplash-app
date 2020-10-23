import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import ImageCollectionReducer from "./image-collection/image-collection.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["imageCollection"]
};

const rootReducer = combineReducers({
  imageCollection: ImageCollectionReducer
});

export default persistReducer(persistConfig, rootReducer);
