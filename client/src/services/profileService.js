import axios from "axios";
const url = "http://localhost:3545/api/profile";

export const getMyPolls = (id) => {
  var urlmysurveys = url + "/mySurveys";
  console.log("urlmysurveys", urlmysurveys);
  return new Promise((resolve, reject) => {
    axios
      .get(urlmysurveys, id)
      .then((res) => {
        const data = res.data;
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
