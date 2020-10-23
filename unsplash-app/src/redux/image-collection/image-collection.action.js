import imageCollectionActionTypes from  './image-collection.types'

export const addImageCollectionToStore = imageCollectionData => ({
    type:imageCollectionActionTypes.ADD_IMAGE_DATA,
    payload:imageCollectionData
});

