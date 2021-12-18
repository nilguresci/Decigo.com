import axios from "axios";
const url = "http://localhost:3545/api/auth/register";

export const register = (data) => {
  return axios.post(url, data);
};
