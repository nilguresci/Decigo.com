import Vuex from "vuex";
import * as pollService from "../services/pollService";
import * as authService from "../services/authService";
import store from "store";

export default Vuex.createStore({
  state: {
    polls: [],
    updated: {},
    loggedInUserId: "61912afa785acf3d5d63021c", //login işlemi henüz yapılmadığından, kullanıcı kişi buraya kendi idsini yazmalı, bu id ile de çalışabilir
    showRegisterComp: false,
    loggedInUserInfo: {},
    isLoggedIn: false,
    newPool: {},
  },
  mutations: {
    getPolls(state, payload) {
      const data = payload.data;
      console.log("data", data);
      const pollsObject = [];

      data.forEach((poll) => {
        const options = [];
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
        pollsObject.push({
          userId: poll.UserId,
          username: poll.Username,
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
    getLogin(state, payload) {
      //state.loggedInUserInfo = payload;
      var data = payload.data;
      console.log(data);
      var userData = {
        username: data.Username,
        token: data.token,
        userId: data.userid,
        avatarNo: 0,
      };
      state.loggedInUserInfo = userData;
      state.loggedInUserId = payload.data.userid;
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
    setLogin({ commit }, data) {
      authService.login(data.data).then(
        (res) => {
          console.log("res", res);
          if (res.data.success) {
            commit("getLogin", { data: res.data });
          }
        },
        (err) => {
          console.log("giriş yapılamadı", err);
        }
      );
    },
    createPool({ commit }, data) {
      data.UserId = this.state.loggedInUserId;
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
  },
  modules: {},
});
