import Axios from "axios";

const http = Axios.create({
  method: "post",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    test: "wsz"
  },
  baseUrl: `${location.origin}/jf-demo-integral`
});

export default http;
