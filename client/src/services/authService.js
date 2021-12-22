import axios from "axios";
const url = "http://localhost:3545/api/auth";

export const register = (data) => {
  return axios.post(`${url}/register`, data);
};

export const login = (data) => {
  return axios.post(`${url}/login`, data);
};
