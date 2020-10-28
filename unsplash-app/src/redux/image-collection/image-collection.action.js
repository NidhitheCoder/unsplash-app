import imageCollectionActionTypes from "./image-collection.types";
import axios from "../../api_calls/axios";

export const fetchImagesSuccess = imagesCollection => ({
  type: imageCollectionActionTypes.FETCH_IMAGES_SUCCESS,
  payload: imagesCollection
});

export const fetchCollecitonsStartAsync = () => {
  return dispatch => {
    axios
      .get("/data")
      .then(data => dispatch(fetchImagesSuccess(data.data)))
      .catch(() => dispatch(fetchImagesSuccess([])));
  };
};

export const addSingleImageToStore = singleImage => ({
  type: imageCollectionActionTypes.ADD_SINGLE_IMAGE_SUCCESS,
  payload: singleImage
});

export const addSingleImageToStoreAsync = (title,url,userId) => {
  return dispatch => {
    axios
      .post(`/data/`, {
        userID: userId,
        title: title,
        imgUrl: url
      })
      .then(res => dispatch(addSingleImageToStore(res.data)));
  };
};

export const removeImageFromStore = image => ({
  type: imageCollectionActionTypes.REMOVE_IMAGE_SUCCESS,
  payload: image
});

export const addSearchKeywordToStore = keyword => ({
  type: imageCollectionActionTypes.ADD_SEARCH_KEYWORD_SUCCESS,
  payload: keyword
});
