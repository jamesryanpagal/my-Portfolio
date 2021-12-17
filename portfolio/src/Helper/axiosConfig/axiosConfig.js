import axios from "axios";

const axiosConfig = axios.create({
  // baseURL: "http://localhost:8585/",
  baseURL: "https://pagal-my-portfolio.herokuapp.com/",
});

export default axiosConfig;
