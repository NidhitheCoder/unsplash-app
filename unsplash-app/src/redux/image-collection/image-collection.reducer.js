import imageCollectionActionTypes from "./image-collection.types";

const INITIAL_STATE = {
  imageCollection: null
};

const imageCollectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case imageCollectionActionTypes.ADD_IMAGE_DATA:
      return {
        ...state,
        imageCollection: action.payload
      };
      break;

    default:
      return { state };
      break;
  }
};

export default imageCollectionReducer;
