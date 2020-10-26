import imageCollectionActionTypes from "./image-collection.types";

export const addImageCollectionToStore = imageCollectionData => ({
  type: imageCollectionActionTypes.ADD_IMAGE_DATA,
  payload: imageCollectionData
});

export const addSingleImageToStore = singleImage => ({
  type: imageCollectionActionTypes.ADD_SINGLE_IMAGE,
  payload: singleImage
});

export const addSearchKeywordToStore = keyword => ({
  type: imageCollectionActionTypes.ADD_SEARCH_KEYWORD,
  payload: keyword
});
