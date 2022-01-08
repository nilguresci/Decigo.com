import Vuex from "vuex";
import * as pollService from "../services/pollService";
import * as authService from "../services/authService";
import * as profileService from "../services/profileService";
import * as adminService from "../services/adminService";
import router from "../router/index";
//import moment from "moment";
import store from "store";

export default Vuex.createStore({
  state: {
    polls: [],
    updated: {},
    loggedInUserId: "",
    showRegisterComp: false,
    loggedInUserInfo: {},
    isLoggedIn: false,
    newPool: {},
    users: [],
    loggedinPolls: [],
    reportedPool: {},
    reportedPools: [],
    decidedReport: {},
    categorySurveys: [],
    noPollErrMsg: "",
    userInfoUpdated: false,
    getPollsByCategory: false,
    updatedSurvey: false,
    passwChanged: false,
    onProfilePage: false,
    pollAdded: false,
    notFoundErrorMsg: "",
    successMsg: "",
  },
  mutations: {
    getPolls(state, payload) {
      state.polls = payload.data.map((poll) => {
        poll.User = state.users.filter((user) => user._id === poll.UserId)[0];
        return poll;
      });
      state.polls = state.polls.filter((poll) => poll.User);
      state.polls.forEach((poll) => {
        poll.Options.forEach((option) => {
          option.Participants = option.Participants.filter(
            (participant) => participant.UserId != ""
          );
        });
      });
      if (store.get("userInfo") && store.get("userInfo").userId) {
        state.polls = state.polls.filter(
          (poll) => poll.UserId !== store.get("userInfo").userId
        );
      }
      state.polls.sort((a, b) => {
        return new Date(b.CreationDate) - new Date(a.CreationDate);
      });
    },
    getJoinPoll(state, payload) {
      state.updated = payload.data;
      console.log("pay", payload.data);
    },
    getRegister(state) {
      state.showRegisterComp = false;
      console.log(
        "kayıt oldu üstte ki değeri false yaparak  rgister componentini kapatıp login i açmış olduk yani kayıt olan kullanıcıyı logine yönlendirdik."
      );
    },
    getUsers(state, payload) {
      state.users = payload.data;
      console.log("users", payload);
    },
    getLogin(state, payload) {
      //state.loggedInUserInfo = payload;
      var data = payload;
      console.log("geldi.", data);
      var userData = {
        username: data._doc.Username,
        //token: data.token,
        userId: data._doc._id,
        avatarNo: data._doc.AvatarNo,
        fullName: data._doc.Fullname,
        email: data._doc.Email,
        isAdmin: data._doc.IsAdmin,
      };
      state.loggedInUserInfo = userData;
      state.loggedInUserId = payload.userid;
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", true);
      store.set("userInfo", userData);
      store.set("token", data.token);
      //localStorage.userInfo = userData;
      console.log(state.loggedInUserInfo);
      console.log("giriş yapıldı", payload);
      if (userData.isAdmin) router.push("admin");
    },
    getCreatePool(state, payload) {
      state.pollAdded = !state.pollAdded;
      state.newPool = payload;
    },
    getMyPolls(state, payload) {
      //console.log("mypolls", payload);
      //state.loggedinPolls = payload.data;
      const data = payload.data;
      const pollsObject = [];
      data.forEach((poll) => {
        const options = [];
        var survey_username = "";
        var avatar_no = 0;
        // console.log(poll.Options);
        var totalParticipants = 0;
        poll.Options.forEach((p) => {
          totalParticipants = totalParticipants + p.Participants.length;
        });
        poll.Options.forEach((p) => {
          //totalParticipants = totalParticipants + p.Participants.length;
          options.push({
            suggestion: p.Suggestion,
            id: p._id,
            text: p.Text,
            participants: p.Participants,
            participantNum: p.ParticipantNum,
            ratio: totalParticipants
              ? (p.Participants.length * 100) / totalParticipants
              : 0,
            //ratio2:(((p.Participants.length * 94) / totalParticipants) * 100) / 94,
          });
        });

        var isParticipant = [];
        poll.Options.forEach((option) => {
          if (option.Participants.length > 0) {
            option.Participants.forEach((participant) => {
              if (participant.UserId === state.loggedInUserId) {
                isParticipant.push(participant.UserId);
              }
            });
          }
        });

        state.users.forEach((element) => {
          if (element._id === poll.UserId) {
            survey_username = element.Username;
            avatar_no = element.AvatarNo ? element.AvatarNo : 0;
          }
        });

        pollsObject.push({
          userId: poll.UserId,
          username: survey_username,
          avatarNo: avatar_no,
          id: poll._id,
          question: poll.Question,
          options: options,
          category: poll.Category,
          creationDate: poll.CreationDate,
          suggestionNum: poll.SuggestionNum,
          Time: poll.Time, //,
          //time: hours + ":" + minutes,
          totalParticipants: totalParticipants,
          isVoted: isParticipant.length > 0 ? true : false,
        });
      });

      state.loggedinPolls = pollsObject;
      console.log("mypolls state", state.loggedinPolls);
    },
    reportSurvey(state, payload) {
      state.reportedPool = payload;
      state.successMsg = "Anket başarılı bir şekilde raporlandı.";
    },
    getReportedPolls(state, payload) {
      console.log("Payload reported polls", payload);
      state.reportedPools = payload.data;
      console.log("state.reportedPools", state.reportedPools);
    },
    decideReport(state, payload) {
      state.decidedReport = payload;
      state.successMsg = payload.message;
      console.log("decidedreport", payload.message);
    },
    getSurveyByCategory(state, payload) {
      state.categorySurveys = payload.data.map((poll) => {
        poll.User = state.users.filter((user) => user._id === poll.UserId)[0];
        return poll;
      });
      state.categorySurveys = state.categorySurveys.filter((poll) => poll.User);
      state.categorySurveys.forEach((poll) => {
        poll.Options.forEach((option) => {
          option.Participants = option.Participants.filter(
            (participant) => participant.UserId != ""
          );
        });
      });

      state.getPollsByCategory = !state.getPollsByCategory;
      console.log("state.categorySurveys", state.categorySurveys);
    },
    getDeleteMySurvey(state, payload) {
      state.successMsg = "Anket başarılı bir şekilde silindi.";
      console.log("silindi", payload);
    },
    getUpdateMyInfo(state, payload) {
      state.successMsg =
        "Kullanıcı bilgileriniz başarılı bir şekilde güncellendi.";
      console.log("update payload", payload);
      //store.set("userInfo", userData);
    },
    getUserInfo(state, payload) {
      console.log("my user infopayload", payload);
      var userData = {
        username: payload.Username,
        userId: payload._id,
        avatarNo: payload.AvatarNo,
        fullName: payload.Fullname,
        email: payload.Email,
      };
      store.set("userInfo", userData);
    },
    updateSurvey(state, payload) {
      state.successMsg = "Anket başarılı bir şekilde güncellendi.";
      console.log(payload);
      state.updatedSurvey = true;
    },
    getChangeMyPassw(state, payload) {
      state.successMsg = "Şifreniz değiştirildi.";
      state.passwChanged = true;
      console.log(payload);
    },
  },
  actions: {
    setPolls({ commit }) {
      pollService.getPolls().then((res) => {
        commit("getPolls", { data: res.data });
      });
    },
    joinPoll({ commit }, data) {
      pollService.joinPoll(data).then(
        (res) => {
          console.log("r", res);
          if (res.data.success) {
            commit("getJoinPoll", { data: res.data });
          }
        },
        (err) => {
          console.log("başarısız", err);
        }
      );
    },
    setRegister({ commit }, data) {
      authService.register(data.data).then(
        (res) => {
          console.log(res);
          if (res.data.success) {
            commit("getRegister");
          }
        },
        (err) => {
          console.log("kayıt olunmadı", err);
        }
      );
    },
    setUsers({ commit }) {
      pollService.getUsers().then((res) => {
        commit("getUsers", { data: res.data });
      });
    },
    setLogin({ commit }, data) {
      authService.login(data.data).then(
        (res) => {
          console.log("res", res);
          if (res.data.success) {
            commit("getLogin", res.data);
          }
        },
        (err) => {
          console.log("giriş yapılamadı", err);
        }
      );
    },
    createPool({ commit }, data) {
      data.UserId = store.get("userInfo").userId; // this.state.loggedInUserId;
      console.log("createpolldata", data);
      pollService
        .createPool(data)
        .then((res) => {
          if (res.data.success) {
            commit("getCreatePool");
          }
        })
        .catch((err) => {
          console.log("Create Olmadı", err);
        });
    },
    setMyPolls({ commit }) {
      var id = store.get("userInfo").userId;
      //console.log("myid", id);
      profileService
        .getMyPolls(id)
        .then((res) => {
          //console.log("res geld", res);
          if (res.success) {
            commit("getMyPolls", { data: res.data });
          }
        })
        .catch((err) => {
          this.state.noPollErrMsg = "Henüz anket oluşturmadın.";
          console.log(err);
        });
    },
    reportSurvey({ commit }, data) {
      pollService
        .reportPool(data)
        .then((res) => {
          commit("reportSurvey", res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getReportedPolls({ commit }) {
      console.log("getReportedPolls");
      pollService
        .getReportedPolls()
        .then((res) => {
          console.log("reported polls res", res.data.data);
          commit("getReportedPolls", { data: res.data.data });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    decideReport({ commit }, data) {
      adminService
        .decideReport(data)
        .then((res) => {
          commit("decideReport", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getSurveyByCategory({ commit }, data) {
      pollService
        .getSurveyByCategory(data)
        .then((res) => {
          commit("getSurveyByCategory", res.data);
        })
        .catch((err) => {
          console.log("error msg", err.message);
        });
    },
    setDeleteMySurvey({ commit }, id) {
      profileService
        .deleteMySurvey(id)
        .then((res) => {
          commit("getDeleteMySurvey", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setUserInfo({ commit }, id) {
      profileService
        .getMyUserInfo(id)
        .then((res) => {
          commit("getUserInfo", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setUpdateMyInfo({ commit }, data) {
      profileService
        .updateMyInfo(data)
        .then((res) => {
          this.state.userInfoUpdated = !this.state.userInfoUpdated;
          commit("getUpdateMyInfo", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateSurvey({ commit }, data) {
      profileService.updateSurvey(data.id, data.time).then((res) => {
        commit("updateSurvey", res.data);
      });
    },
    setChangePassw({ commit }, data) {
      var passData = {
        Password: data.data.password,
        newPassword: data.data.newPassword,
      };
      var id = data.data.id;
      console.log(data);
      profileService.changeMyPassword(id, passData).then((res) => {
        commit("getChangeMyPassw", res.data);
      });
    },
  },
  modules: {},
});
