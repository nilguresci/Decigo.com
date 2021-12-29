import Vuex from "vuex";
import * as pollService from "../services/pollService";
import * as authService from "../services/authService";
import * as profileService from "../services/profileService";
import * as adminService from "../services/adminService";
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
  },
  mutations: {
    getPolls(state, payload) {
      const data = payload.data;
      console.log("data", data);
      console.log("poll users", state.users);
      const pollsObject = [];
      //const userinfo = [];
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
            ratio: (p.Participants.length * 100) / totalParticipants,
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
        // var found = [];
        // found = state.users.find((element) => element._id === poll.UserId);

        //console.log("found", found);
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
          time: poll.Time,
          totalParticipants: totalParticipants,
          isVoted: isParticipant.length > 0 ? true : false,
        });
      });
      state.polls = pollsObject;
      console.log("ps", state.polls);
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
        token: data.token,
        userId: data._doc._id,
        avatarNo: data._doc.AvatarNo,
        fullName: data._doc.Fullname,
        email: data._doc.Email,
      };
      state.loggedInUserInfo = userData;
      state.loggedInUserId = payload.userid;
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", true);
      store.set("userInfo", userData);
      //localStorage.userInfo = userData;
      console.log(state.loggedInUserInfo);
      console.log("giriş yapıldı", payload);
    },
    getCreatePool(state, payload) {
      state.newPool = payload;
    },
    getMyPolls(state, payload) {
      console.log("mypolls", payload);
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
            ratio: (p.Participants.length * 100) / totalParticipants,
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
        // var found = [];
        // found = state.users.find((element) => element._id === poll.UserId);

        //console.log("found", found);
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
          time: poll.Time,
          totalParticipants: totalParticipants,
          isVoted: isParticipant.length > 0 ? true : false,
        });
      });

      state.loggedinPolls = pollsObject;
      console.log("state.loggedinPolls", state.loggedinPolls);
    },
    reportSurvey(state, payload) {
      state.reportedPool = payload;
    },
    getReportedPolls(state, payload) {
      console.log("Payload", payload);
      state.reportedPools = payload.data;
      console.log("state.reportedPools", state.reportedPools);
    },
    decideReport(state, payload) {
      state.decidedReport = payload;
    },
    getSurveyByCategory(state, payload) {
      state.categorySurveys = payload;
      console.log("state.categorySurveys", state.categorySurveys);
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
      console.log("myid", id);
      profileService
        .getMyPolls(id)
        .then((res) => {
          console.log("res geld", res);
          if (res.success) {
            commit("getMyPolls", { data: res.data });
          }
        })
        .catch((err) => {
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
          console.log("res", res.data.data);
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
          console.log(err);
        });
    },
  },
  modules: {},
});
