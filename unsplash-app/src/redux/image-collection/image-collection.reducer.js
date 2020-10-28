import imageCollectionActionTypes from "./image-collection.types";
import { removeImage } from "./image-collection.utils";

const INITIAL_STATE = {
  imageCollection: null,
  searchWord: "",
  isFetching:false,
  errorMessage:""
};

const imageCollectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case imageCollectionActionTypes.FETCH_IMAGES_START:
      return{
        ...state,
        isFetching:true
      }

    case imageCollectionActionTypes.FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        isFetching:false,
        imageCollection: action.payload
      };

    case imageCollectionActionTypes.ADD_SINGLE_IMAGE:
      return {
        ...state,
        imageCollection: [...state.imageCollection, action.payload]
      };

      case imageCollectionActionTypes.FETCH_IMAGES_FAILURE:
        return{
          ...state,
          isFetching:false,
          errorMessage:action.payload
        }

    case imageCollectionActionTypes.REMOVE_IMAGE:
      return {
        ...state,
        imageCollection: removeImage(action.payload, state.imageCollection)
      };

    case imageCollectionActionTypes.ADD_SEARCH_KEYWORD:
      return {
        ...state,
        searchWord: action.payload
      };

    default:
      return { state };
  }
};

export default imageCollectionReducer;
