import axios from "axios";
const url = "http://localhost:3545/api/survey";

//class pollService {
//   static getPolls() {
//     console.log("servise geldi");
//     return new Promise((resolve, reject) => {
//       axios
//         .get(url)
//         .then((res) => {
//           const data = res.data;
//           resolve(data);
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   }

//}
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
  return axios.patch(url, data);
};

export const createPool = (pool) => {
  return axios.post(url, pool);
};

// export const getPolls = () => {
//   return axios.get(url);
// };
//export default pollService;
