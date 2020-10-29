export const removeImage = (DeletedImage, collections) => {
  return collections.filter(image => image.id !== DeletedImage.id);
};
