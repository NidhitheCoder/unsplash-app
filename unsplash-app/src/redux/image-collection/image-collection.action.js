import imageCollectionActionTypes from "./image-collection.types";
import axios from "../../axios/axios";

//toggleUsers helps to toggle login and signup page in a single route 
export const toggleUser =() =>({
  type:imageCollectionActionTypes.TOGGLE_USER_TYPE
})

export const toggleUserAsync = () => {
  return dispatch => {
    dispatch(toggleUser());
  }
}

// Images fetch section
export const fetchImagesSuccess = imagesCollection => ({
  type: imageCollectionActionTypes.FETCH_IMAGES_SUCCESS,
  payload: imagesCollection
});

export const fetchImageStart = () => ({
  type:imageCollectionActionTypes.FETCH_IMAGES_START
})

export const fetchCollecitonsStartAsync = () => {
  return dispatch => {
    dispatch(fetchImageStart())
    axios
      .get("/images")
      .then(data =>
        setTimeout(() => {
          dispatch(fetchImagesSuccess(data.data))
        }, 1000) )
      .catch(() => dispatch(fetchImageStart()));
  };
};

// Add image sections
export const addSingleImageToStore = singleImage => ({
  type: imageCollectionActionTypes.ADD_SINGLE_IMAGE_SUCCESS,
  payload: singleImage
});

export const addSingleImageToStoreAsync = (title, url, userId) => {
  return dispatch => {
    axios
      .post(`/images/`, {
        userID: userId,
        title: title,
        imgUrl: url
      })
      .then(res => dispatch(addSingleImageToStore(res.data)));
  };
};

// Remove image section
export const removeImageFromStore = image => ({
  type: imageCollectionActionTypes.REMOVE_IMAGE_SUCCESS,
  payload: image
});

export const removeImageFromStoreAsync = image => {
  return dispatch => {
    axios.delete(`/images/${image.id}`).then(res => {
      if (res.request.status === 200) {
        dispatch(removeImageFromStore(image));
      }
    });
  };
};

// Add search keyword
export const addSearchKeywordToStore = keyword => ({
  type: imageCollectionActionTypes.ADD_SEARCH_KEYWORD_SUCCESS,
  payload: keyword
});

export const addSearchKeywordToStoreAsync = keyword => {
  return dispatch => {
    dispatch(addSearchKeywordToStore(keyword));
  };
};
