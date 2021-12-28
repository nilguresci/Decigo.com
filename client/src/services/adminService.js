import axios from "axios";
const url = "http://localhost:3545/api/admin";

export const decideReport = (data) => {
  return axios.post(`${url}/decidereport`, data);
};
