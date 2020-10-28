import axios from "./axios";

export const getLoginAccess = async () => {
  await axios.get("data/login").then(res => console.log(res));
};

export const deleteImgwithId = async id => {
  let result;
  await axios.delete(`/data/${id}`).then(res => (result = res.request.status));
  return result;
};

export const AddNewImage = async (id, title, url, userId) => {
  let imageDetails;
  await axios
    .post(`/data/`, {
      id: id,
      userID: userId,
      title: title,
      imgUrl: url
    })
    .then(res => (imageDetails = res.data));
  return imageDetails;
};
