import axios from "axios";

const instance = axios.create({
  baseURL: "http://52.66.84.61/",
  timeout: 1000
});

export default instance;
