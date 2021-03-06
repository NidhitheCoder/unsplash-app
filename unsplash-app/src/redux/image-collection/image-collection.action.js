import imageCollectionActionTypes from "./image-collection.types";
import axios from "../../axios/axios";
import { parseToken } from "../../auth/token-manipulate";

const makeHeader = token => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
};

//toggleUsers helps to toggle login and signup page in a single route
export const toggleUser = value => ({
  type: imageCollectionActionTypes.TOGGLE_USER_TYPE,
  payload: value
});

export const toggleUserAsync = value => {
  return dispatch => {
    dispatch(toggleUser(value));
  };
};

// User sign Up
export const signUpWithCredentialAsync = (userName, password) => {
  return async dispatch => {
    let response;
    await axios
      .post("/signup", { username: userName, password: password })
      .then(res => {
        response = res;

        if (response.status === 200) {
          localStorage.setItem("access_token", response.data.access_token);
          localStorage.setItem("refresh_token", response.data.refresh_token);
          const parsedToken = parseToken(response.data.access_token);
          dispatch(addUserDetailsToStore(parsedToken));
        } else {
          alert("Something wrong " + response.statusText);
        }
      })
      .catch(err => alert(err));
  };
};

// User login
export const addUserDetailsToStore = user => ({
  type: imageCollectionActionTypes.ADD_USER,
  payload: user
});

// Login with username and password
export const loginWithCredentialsAsync = (userName, password) => {
  return async dispatch => {
    let response;
    await axios
      .post("/login", {
        username: userName,
        password: password
      })
      .then(res => {
        response = res;
        if (response && response.status === 200) {
          localStorage.setItem("access_token", response.data.access_token);
          localStorage.setItem("refresh_token", response.data.refresh_token);
          let parsedToken = parseToken(response.data.access_token);
          dispatch(addUserDetailsToStore(parsedToken));
        }
      })
      .catch(err => alert(err));
    return response && response.data;
  };
};

// Login with refresh token
export const loginWithRefreshToken = refresh_token => {
  return async dispatch => {
    let response;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Refresh ${refresh_token}`
    };
    await axios
      .post(
        "/login",
        {},
        {
          headers: headers
        }
      )
      .then(res => {
        response = res;
      })
      .catch(err => alert("error inside refreshtoken login" + err));

    if (response && response.status === 200) {
      localStorage.setItem("access_token", response.data.access_token);
      let parsedToken = parseToken(response.data.access_token);
      dispatch(addUserDetailsToStore(parsedToken));
      console.log("response aghayaa");
      return response;
    }
  };
};

// user Logout
export const removeUserFromStore = () => ({
  type: imageCollectionActionTypes.REMOVE_USER
});

export const logoutAsync = () => {
  return async dispatch => {
    let response;
    await axios
      .get("/api/logout", {
        headers: makeHeader(localStorage.getItem("access_token"))
      })
      .then(res => {
        response = res;
      });

    if (response && response.status === 200 && response.data.error === "") {
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("access_token");
      dispatch(removeUserFromStore());
    } else {
      alert("Something went wrong... please try again " + response.statusText);
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
  return async dispatch => {
    dispatch(fetchImageStart());
    let response;
    await axios
      .get("/api/images", {
        headers: makeHeader(localStorage.getItem("access_token"))
      })
      .then(data => {
        response = data;
      })
      .catch(err => {
        alert("error in fetching images", err);
        dispatch(fetchImageStart());
      });

    if (response && response.status === 200) {
      setTimeout(() => {
        dispatch(fetchImagesSuccess(response.data ? response.data : []));
      }, 1000);
      let parsedToken = parseToken(localStorage.getItem("access_token"));
      dispatch(addUserDetailsToStore(parsedToken));
    } else {
      alert("Something wrong... Please try again");
    }
  };
};

// Add image sections
export const addSingleImageToStore = singleImage => ({
  type: imageCollectionActionTypes.ADD_SINGLE_IMAGE_SUCCESS,
  payload: singleImage
});

export const addSingleImageToStoreAsync = (file, imageUrl) => {
  return async dispatch => {
    let response;
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      },
      timeout: 5000
    };

    await axios
      .post(`/api/images/`, file, config)
      .then(res => {
        response = res;
      })
      .catch(err => alert("error " + err));

    if (response && response.status === 201) {
      alert("Image successfully uploaded.");
      let img = {
        id: response.data.id,
        label: response.data.label,
        name: URL.createObjectURL(imageUrl)
      };
      dispatch(addSingleImageToStore(img));
    }
  };
};

// Remove image section
export const removeImageFromStore = image => ({
  type: imageCollectionActionTypes.REMOVE_IMAGE_SUCCESS,
  payload: image
});

export const removeImageFromStoreAsync = image => {
  return async dispatch => {
    let response;
    await axios
      .delete(`/api/images/${image.id}`, {
        headers: makeHeader(localStorage.getItem("access_token"))
      })
      .then(res => {
        response = res;
      });
    if (response && response.status === 200) {
      dispatch(removeImageFromStore(image));
      alert("Image successfully deleted.");
    } else {
      alert("Something Wrong : " + response.statusText);
    }
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
