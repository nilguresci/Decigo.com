import axios from "axios";
import store from "store";
const url = "api/admin";

const token = store.get("token") ? store.get("token") : "";

const authHeaders = {
  Authorization: `Bearer ${token}`,
};

export const decideReport = (data) => {
  return axios.post(`${url}/decidereport`, data, { headers: authHeaders });
};
