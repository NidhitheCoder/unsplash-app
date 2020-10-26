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

      case imageCollectionActionTypes.ADD_SINGLE_IMAGE:
        return {
          ...state,
          imageCollection:[...state.imageCollection, action.payload]
        }

    default:
      return { state };
  }
};

export default imageCollectionReducer;
