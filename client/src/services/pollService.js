import axios from "axios";
import store from "store";
const url = "api/survey";

const token = store.get("token") ? store.get("token") : "";

const authHeaders = {
  Authorization: `Bearer ${token}`,
};

export const getPolls = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        const data = res.data;
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getUsers = () => {
  var urlusers = url + "/users";
  console.log("urlusers", urlusers);
  return new Promise((resolve, reject) => {
    axios
      .get(urlusers)
      .then((res) => {
        const data = res.data;
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const joinPoll = (data) => {
  return axios.patch(url, data, { headers: authHeaders });
};

export const createPool = (pool) => {
  return axios.post(url, pool, { headers: authHeaders });
};

export const reportPool = (surveyId) => {
  return axios.post(url + "/report", { surveyId }, { headers: authHeaders });
};

export const getReportedPolls = () => {
  return axios.get(url + "/getReporteds", { headers: authHeaders });
};

export const getSurveyByCategory = (category) => {
  return axios.get(`${url}/category/${category}`, { headers: authHeaders });
};
