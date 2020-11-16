import axios from "axios";

let baseUrlId;

if (process.env.NODE_ENV !== "production") {
  baseUrlId = process.env.REACT_APP_API_URL;
} else {
  baseUrlId = process.env.API_URL;
}

const instance = axios.create({
  baseURL: baseUrlId,
  timeout: 1000
});
export default instance;
