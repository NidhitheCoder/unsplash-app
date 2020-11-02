import imageCollectionActionTypes from "./image-collection.types";
import axios from "../../axios/axios";

//toggleUsers helps to toggle login and signup page in a single route
export const toggleUser = () => ({
  type: imageCollectionActionTypes.TOGGLE_USER_TYPE
});

export const toggleUserAsync = () => {
  return dispatch => {
    dispatch(toggleUser());
  };
};

// User sign Up
export const addUserDetailsFromSignUp = userId => ({
  type: imageCollectionActionTypes.ADD_USER,
  payload: userId
});

export const signUpWithCredentialAsync = () => {
  return dispatch => {
    axios.get("/signup").then(res=>{
      console.log(res)
    }).catch(err=>console.log("Error Hitting : ", err))
  };
};

// User login

// const headers = {
//   'Content-Type': 'application/json',
//   'Authorization': 'JWT fefege...'
// }

const addUserIdToStore = UID => ({
  type: imageCollectionActionTypes.ADD_USER_ID,
  payload: UID
});

export const loginWithCredentialsAsync = (userName, password) => {
  return dispatch => {
    axios.get("/login").then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch(addUserIdToStore(res.data.user.userId));
    });
    // ,{
    //   email:userName,
    //   password:password
    // },{headers:headers}
  };
};

// Images fetch section
export const fetchImagesSuccess = imagesCollection => ({
  type: imageCollectionActionTypes.FETCH_IMAGES_SUCCESS,
  payload: imagesCollection
});

export const fetchImageStart = () => ({
  type: imageCollectionActionTypes.FETCH_IMAGES_START
});

export const fetchCollecitonsStartAsync = () => {
  return dispatch => {
    dispatch(fetchImageStart());
    axios
      .get("/images")
      .then(data =>
        setTimeout(() => {
          dispatch(fetchImagesSuccess(data.data));
        }, 1000)
      )
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
      .post(`/images`, {
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
