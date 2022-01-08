import axios from "axios";
import store from "store";
const url = "http://localhost:3545/api/profile";

const token = store.get("token") ? store.get("token") : "";
//console.log("token", token);
const authHeaders = {
  Authorization: `Bearer ${token}`,
};

// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       store.remove("userInfo");
//       setTimeout(() => {
//         window.location.href = "/";
//       }, 1000);
//     }
//     throw error;
//   }
// );

export const getMyPolls = (id) => {
  var urlmysurveys = url + `/mySurveys/${id}`;
  // console.log("urlmysurveys", urlmysurveys);
  // console.log("token", authHeaders);

  return new Promise((resolve, reject) => {
    axios
      .get(urlmysurveys, { headers: authHeaders })
      .then((res) => {
        const data = res.data;
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const deleteMySurvey = (id) => {
  var urlDelete = url + `/mySurveys/${id}`;
  return new Promise((resolve, reject) => {
    axios
      .delete(urlDelete, { headers: authHeaders })
      .then((res) => {
        const data = res.data;
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const updateMyInfo = (data) => {
  console.log("data", data);
  var id = data.id;
  var urlUpdateInfo = url + `/update/${id}`;
  return new Promise((resolve, reject) => {
    axios
      .put(urlUpdateInfo, data, { headers: authHeaders })
      .then((res) => {
        const data = res.data;
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getMyUserInfo = (id) => {
  var urlInfo = url + `/${id}`;
  console.log("urlinfu", urlInfo);
  return new Promise((resolve, reject) => {
    axios
      .get(urlInfo, { headers: authHeaders })
      .then((res) => {
        const data = res.data;
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const updateSurvey = (id, time) => {
  return axios.put(`${url}/mySurveys/${id}`, { time });
};

export const changeMyPassword = (id, data) => {
  console.log("url id", id);
  return axios.put(`${url}/changePass/${id}`, data, { headers: authHeaders });
};
