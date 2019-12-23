import Axios from "axios";

const http = Axios.create({
  timeout: 5000,
  baseURL: `${location.origin}/jf-demo-integral`
});

export default http;
