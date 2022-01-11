import axios from "axios";
const url = "api/auth";

export const register = (data) => {
  return axios.post(`${url}/register`, data);
};

export const login = (data) => {
  return axios.post(`${url}/login`, data);
};
