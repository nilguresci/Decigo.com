<template>
  <div id="main">
    <div class="activity-update-form">
      <div class="create-survey-input">
        <!-- <add-survey></add-survey> -->
        <add-survey-component v-show="!add"></add-survey-component>
      </div>
    </div>
    <div class="main-content">
      <ul class="survey-list">
        <li class="survey-item">
          <div class="survey-avatar">
            <a href="#profile">
              <img
                loading="lazy"
                src="../../assets/barista2.png"
                class="avatar"
                width="200"
                height="200"
                alt="Profile picture of user"
              />
            </a>
          </div>
          <div class="post-content" v-for="(poll, id) in polls" :key="id">
            <div class="post-header">
              <div class="posted-meta">
                <p>
                  <a href="#user">{{ poll.userId }} </a> posted an update
                </p>
              </div>
              <div class="mute">1 minute ago</div>
            </div>

            <div class="poll" :id="poll.id">
              <div class="question">{{ poll.question }}</div>
              <div class="answers-area">
                <div
                  class="answers"
                  v-for="option in poll.options"
                  :key="option"
                >
                  <div
                    class="answer"
                    @click="markAnswer(option.id, poll)"
                    :id="option.id"
                  >
                    {{ option.text }}
                    <span
                      class="pb"
                      :class="[poll.isVoted ? 'percentage-bar' : 'hide']"
                      id="pb"
                      :style="{
                        width: option.ratio + '%',
                      }"
                    ></span>
                    <span
                      class="pv"
                      :class="[poll.isVoted ? 'percentage-value' : 'hide']"
                      id="pv"
                      >{{ option.ratio }}%</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AddSurveyComponent from "./AddSurvey.vue";
export default {
  name: "HomeMainContent",
  data() {
    return {
      pollCount: 20,
      answersWeight: [40, 40, 20, 100],
      selectedAnswer: -1,
      add: false,
      polls: [],
    };
  },
  components: {
    "add-survey-component": AddSurveyComponent,
  },
  mounted() {
    this.getPolls();

    this.$store.watch(
      () => [this.$store.state.polls, this.$store.state.updated],
      async () => {
        this.polls = this.$store.state.polls;
      }
    );

    this.$store.watch(
      () => this.$store.state.updated,
      async () => {
        this.getPolls();
        this.polls = this.$store.state.polls;
      }
    );
  },
  methods: {
    markAnswer(id, poll) {
      if (!poll.isVoted) {
        // var sel = document.getElementById(poll.id);
        // console.log("markanswer a geldi", sel);
        this.selectedAnswer = +id;
        try {
          var selectedElement = document.querySelector(
            ".poll .answers .answer.selected"
          );
          if (selectedElement) {
            //console.log(selectedElement);
            selectedElement.classList.remove("selected");
          }
        } catch (msg) {
          return msg;
        }
        document.querySelectorAll(".poll .answers-area .answers .answer");
        var newSelectedElement = document.getElementById(id);
        newSelectedElement.classList.add("selected");
        var polldata = {
          SurveyId: poll.id,
          OptionId: id,
          UserId: this.$store.state.loggedInUserId,
        };

        this.$store.dispatch("joinPoll", {
          data: polldata,
        });
      } else {
        console.log("zaten katılmışsın!!!");
      }
    },
    getPolls() {
      this.$store.dispatch({
        type: "setPolls",
      });
      this.polls = this.$store.state.polls;
    },
    // participantUserControl(id, poll) {
    //   const userid = this.$store.state.loggedInUserId;

    //   //console.log("tık", poll.options);
    //   poll.options.forEach((option) => {
    //     //console.log("opt", option);
    //     if (option.participants.length > 0) {
    //       option.participants.forEach((participant) => {
    //         if (participant.UserId === userid) {
    //
    //           console.log("zaten katıldın");
    //         }
    //       });
    //     }
    //   });

    //   if (!this.isVoted) {
    //     console.log("gidiyor2");
    //     this.isVoted = poll.id;
    //     this.markAnswer(id, poll);
    //   }
    // },
  },
};
</script>
<style scoped lang="scss">
$secondary_text: #bbbbdc;
$primary_text: #626c72;
$primary_color: #8224e3;
$grey_text: #626c72;
#main {
  margin: 0 15px;
}
.hide {
  display: none;
}
.main-content {
  display: block;
  .survey-list {
    position: relative;
    padding: 0;
    margin-left: 13px;
    li {
      visibility: visible;
      position: relative;
    }
    .survey-item {
      list-style: none;
      padding: 0;
      margin-top: 0;
      margin-bottom: 2.5rem;
      border: none !important;

      li {
        position: relative;
      }

      .post-content {
        display: inline;
        p {
          margin: 0;
        }
        .post-header {
          margin-bottom: 0.75rem;
          line-height: 1.75;
          a {
            display: inline;
          }
          a:first-child {
            font-weight: 600;
          }

          .posted-meta {
            display: flex;
            justify-content: flex-start;

            p {
              margin-left: 20px;
            }
          }
          .mute {
            display: flex;
            justify-self: flex-start;
            padding-left: 20px;
            font-size: 90%;
            color: #bbbbdc;
          }
        }
        .post-inner {
          .post-inner-text {
            margin-bottom: 0.5rem;
            display: flex;
            justify-self: flex-start;
            padding-left: 58px;
          }

          .media-list {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            img {
              max-width: 75%;
              height: 75%;
              position: relative;
              display: flex;
              margin-left: 4%;
            }

            .media-list-item {
              list-style: none;
            }
          }

          .poll-area {
            display: flex;
            flex-direction: column;
            margin-left: 3.5rem;
            font-size: 0.8rem;
            font-weight: 400;
            .poll-area-full {
              display: flex;
              flex-direction: column;
              border: 2px solid #e6e6e6;
              border-radius: 15px;
              padding-top: 8px;
              padding-bottom: 8px;
              padding-left: 2%;
              padding-right: 0;
              margin-bottom: 10px;
              .progress {
                height: 0.5rem;
                margin-right: 3%;
                .progress-bar {
                  font-size: 0.55rem;
                  font-weight: 200;
                  //background-color: #8224e3;
                  background-image: linear-gradient(
                    90deg,
                    #8224e3 0,
                    #a968ec 50%,
                    #8224e3 100%
                  );
                }
              }

              .form-check {
                display: flex;
                justify-content: space-between;

                .form-check-input {
                  width: 0.8em;
                  height: 0.8em;
                }

                .form-check-input:checked {
                  background-color: #8224e3;
                  border-color: #8224e3;
                }
                .form-check-label {
                  font-size: 0.8rem;
                  font-weight: 400;
                  line-height: 1;
                }
                span {
                  margin-right: 5%;
                }
              }
            }
          }
        }

        .poll {
          display: inherit;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          max-width: 400px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0px 0px 20px 5px rgba(35, 30, 128, 0.05);
        }
        .poll .question {
          font-size: 14px;
          margin-bottom: 0.5rem;
          display: flex;
          justify-self: flex-start;
          padding-left: 58px;
        }
        .answers-area {
          .answers {
            margin-left: 3.5rem;
            font-size: 0.8rem;
            font-weight: 400;

            .answer {
              display: flex;
              justify-content: flex-start;
              position: relative;
              width: 94%;
              height: 30px;
              padding: 0px 10px;
              line-height: 30px;
              color: #7442a9;
              margin-bottom: 10px;
              border: 1px solid #d4d4d4;
              border-radius: 10px;
              cursor: pointer;
              overflow: hidden;

              // border: 2px solid #e6e6e6;
              // border-radius: 15px;
              // padding-top: 8px;
              // padding-bottom: 8px;
              // padding-left: 2%;
              // padding-right: 0;
              // margin-bottom: 10px;
            }
          }
        }

        .poll .answers .answer.selected {
          border: 2px solid #8224e3;
        }
        .poll .answers .answer span.percentage-value {
          position: absolute;
          top: 50%;
          right: 0px;
          width: 40px;
          transform: translateY(-50%);
          color: #7442a9;
          font-size: 13px;
        }
        .poll .answers .answer span.percentage-bar {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 0%;
          height: 100%;
          background: #e6d2f9;
          // background-image: linear-gradient(
          //   90deg,
          //   #f6effe 0,
          //   #a968ec 50%,
          //   #f6effe 100%
          // );
          z-index: -1;
          transition: width 300ms ease-in-out;
        }
      }

      .survey-avatar {
        float: left;
        text-align: center;

        img {
          width: 40px !important;
          height: auto;
          .avatar {
            display: inline;
          }
        }
      }
    }
  }
}
.activity-update-form {
  background: #fff;
  position: relative;
  margin-bottom: 2.5rem;
  padding: 2.5rem 1rem;
  border-radius: 12px;
  box-shadow: 0 20px 90px rgba(58, 46, 68, 0.05);
  display: flex;
  justify-content: space-around;

  #whats-new-form {
    position: relative;
    font-size: 90%;
  }
  #whats-new-avatar {
    img {
      width: 40px;
      height: auto;
    }
  }

  .create-survey-input {
    width: -webkit-fill-available;
    margin-left: 20px;
    input {
      border-radius: 15px;
    }
  }
}
.avatar {
  border-radius: 50%;
  height: auto;
}
.activity-update-form:before {
  content: "";
  background: #fff;
  height: 95%;
  border-radius: 12px;
  position: absolute;
  left: 1rem;
  right: 1rem;
  margin: auto;
  bottom: -13px;
  z-index: -1;
  box-shadow: 0 20px 90px rgba(58, 46, 68, 0.04);
}

a {
  color: #29292d;
  transition: 0.5s;
  text-decoration: none;
  background-color: transparent;
}
</style>
