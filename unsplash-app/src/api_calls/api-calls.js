import axios from "./axios";

export const getImgCollection = async url => {
  let val = [];
  await axios.get(url).then(data => data.data.map(item => val.push(item)));
  return val;
};

export const deleteImgwithId = async (id, imageCollection) => {
  let result;
  await axios.delete(`/data/${id}`).then(res => (result = res));
  let collectionData = await getImgCollection("/data");
  imageCollection(collectionData);
  return result;
};
