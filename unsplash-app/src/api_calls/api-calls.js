import axios from './axios';


export const getImgCollection = async url => {
  let val = [];
  await axios.get(url).then(data => data.data.map(item => val.push(item)));
  return val;
};
