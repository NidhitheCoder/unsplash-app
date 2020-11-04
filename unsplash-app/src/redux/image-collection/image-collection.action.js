import imageCollectionActionTypes from "./image-collection.types";
import axios from "../../axios/axios";

const headers = {
  "Content-Type": "application/json",
  Authorization: localStorage.getItem("refresh_token")
};

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

export const signUpWithCredentialAsync = (userName,password) => {
  return async(dispatch) => {
    let response;
   await axios
      .get("/signup")
      .then(res => {
        response = res;
      })
      .catch(err => alert("Error Hitting : ", err));
    localStorage.setItem("access_token",response.data.access_token);
    localStorage.setItem("refresh_token", response.data.refresh_token);
    dispatch(addUserDetailsToStore(userName))
  };
};

// User login
export const addUserDetailsToStore = user => ({
  type: imageCollectionActionTypes.ADD_USER,
  payload: user
});

export const loginWithCredentialsAsync = (userName, password) => {
  return async dispatch => {
    let response;
    await axios
      .get("/login", { email: userName, password: password })
      .then(res => {
        response = res.data;
      });
    localStorage.setItem("refresh_token", response.refresh_token);
    dispatch(addUserDetailsToStore(userName));
  };
};

// user Logout

export const removeUserFromStore = () => ({
  type: imageCollectionActionTypes.REMOVE_USER
});

// export const Logout

export const logoutAsync = () => {
  return async dispatch => {
    let response;
    await axios.get("/logout", { headers: headers }).then(res => {
      response = res;
    });
    if (response.status === 200 && response.data.Authorization === "") {
      localStorage.removeItem("refresh_token");
    } else {
      alert("Something went wrong... please try again");
    }
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
      .get("/images", { headers: headers })
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
      .post(
        `/images`,
        {
          userID: userId,
          title: title,
          imgUrl: url
        },
        { headers: headers }
      )
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
    axios.delete(`/images/${image.id}`, { headers: headers }).then(res => {
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
