import imageCollectionActionTypes from "./image-collection.types";
import { removeImage } from "./image-collection.utils";

const INITIAL_STATE = {
  imageCollection: null,
  searchWord: "",
  fetchComplete: "",
  newUser: false,
  userId: "",
  user:""
};

const imageCollectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case imageCollectionActionTypes.ADD_USER:
      return{
        ...state,
        user:action.payload
      }
    case imageCollectionActionTypes.ADD_USER_ID:
      return {
        ...state,
        userId: action.payload
      };

    case imageCollectionActionTypes.TOGGLE_USER_TYPE:
      return {
        ...state,
        newUser: !state.newUser
      };

    case imageCollectionActionTypes.FETCH_IMAGES_START:
      return {
        ...state,
        fetchComplete: false
      };

    case imageCollectionActionTypes.FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        imageCollection: action.payload,
        fetchComplete: true
      };

    case imageCollectionActionTypes.ADD_SINGLE_IMAGE_SUCCESS:
      return {
        ...state,
        imageCollection: [...state.imageCollection, action.payload]
      };

    case imageCollectionActionTypes.REMOVE_IMAGE_SUCCESS:
      return {
        ...state,
        imageCollection: removeImage(action.payload, state.imageCollection)
      };

    case imageCollectionActionTypes.ADD_SEARCH_KEYWORD_SUCCESS:
      return {
        ...state,
        searchWord: action.payload
      };

    default:
      return { state };
  }
};

export default imageCollectionReducer;
