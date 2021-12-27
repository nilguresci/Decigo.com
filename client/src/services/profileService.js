import axios from "axios";
import store from "store";
const url = "http://localhost:3545/api/profile";

const token = store.get("userInfo") ? store.get("userInfo").token : "";
console.log("token", token);
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
  var urlmysurveys = url + "/mySurveys";
  console.log("urlmysurveys", urlmysurveys);
  var data = {
    userId: id,
  };
  return new Promise((resolve, reject) => {
    axios
      .get(urlmysurveys, data, { headers: authHeaders })
      .then((res) => {
        const data = res.data;
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });

  // return axios
  //   .get(urlmysurveys, data, { headers: authHeaders })
  //   .then((res) => {
  //     console.log(res.data);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
};
