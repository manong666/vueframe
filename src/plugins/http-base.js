import Axios from "axios";

const http = Axios.create({
  timeout: 5000,
  baseURL: `${location.origin}/`
});

export default http;
