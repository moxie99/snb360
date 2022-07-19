import axios from "axios";

// axios.defaults.headers.common["accept"] = "application/json";
// axios.defaults.headers.post["content-type"] =
//   "application/x-www-form-urlencoded";
// axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
// axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
const api = axios.create({
  baseURL: "https://mbiapi.snb366.com.ng",
  timeout: 10000,
});

export default api;
