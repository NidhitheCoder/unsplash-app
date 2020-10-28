import imageCollectionActionTypes from "./image-collection.types";
import axios from "../../api_calls/axios";

export const fetchImagesStart = () => ({
  type: imageCollectionActionTypes.FETCH_IMAGES_START
});

export const fetchImagesSuccess = imagesCollection => ({
  type: imageCollectionActionTypes.FETCH_IMAGES_SUCCESS,
  payload: imagesCollection
});

export const fetchImagesFailure = errorMessage => ({
  type: imageCollectionActionTypes.FETCH_IMAGES_FAILURE,
  payload: errorMessage
});

export const fetchCollecitonStartAsync = () => {
  return dispatch => {
    dispatch(fetchImagesStart());
    axios
      .get("/data")
      .then(data => dispatch(fetchImagesSuccess(data.data)))
      .catch(error => dispatch(fetchImagesFailure(error.message)));
  };
};

export const addSingleImageToStore = singleImage => ({
  type: imageCollectionActionTypes.ADD_SINGLE_IMAGE,
  payload: singleImage
});

export const removeImageFromStore = image => ({
  type: imageCollectionActionTypes.REMOVE_IMAGE,
  payload: image
});

export const addSearchKeywordToStore = keyword => ({
  type: imageCollectionActionTypes.ADD_SEARCH_KEYWORD,
  payload: keyword
});
