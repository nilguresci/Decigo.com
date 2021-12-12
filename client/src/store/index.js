import Vuex from "vuex";
import * as pollService from "../services/pollService";

export default Vuex.createStore({
  state: {
    polls: [],
    updated: {},
    loggedInUserId: "61912afa785acf3d5d63021c", //login işlemi henüz yapılmadığından, kullanıcı kişi buraya kendi idsini yazmalı, bu id ile de çalışabilir
  },
  mutations: {
    getPolls(state, payload) {
      const data = payload.data;

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
        console.log("totsl", totalParticipants);
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
      console.log("data", pollsObject);
      state.polls = pollsObject;
    },

    getJoinPoll(state, payload) {
      state.updated = payload.data;
      console.log("pay", payload.data);
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
          if (res.data.succes) {
            console.log("başarılı");
            commit("getJoinPoll", { data: res.data });
          }
        },
        (err) => {
          console.log("başarısız", err);
        }
      );
    },
  },
  modules: {},
});
