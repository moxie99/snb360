import axios from "axios";

const api = axios.create({
  baseURL: "https://mbiapi.snb366.com.ng/api/snb360",
  timeout: 10000,
  // headers: {
  //   // Authorization: "Bearer ",
  //   "Content-Type": "application/json",
  // },
});

export default api;
