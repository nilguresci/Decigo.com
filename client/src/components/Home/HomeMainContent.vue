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
        <li class="survey-item" v-for="(poll, id) in polls" :key="id">
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
          <div class="post-content">
            <div class="post-header">
              <div class="posted-meta">
                <p>
                  <a href="#user">{{ poll.userId }} </a> posted an update
                </p>
                <div class="dropdown">
                  <button
                    class="three-dot dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                      />
                    </svg>
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        @click.prevent="share(poll.id)"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          fill="currentColor"
                          class="bi bi-share"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
                          />
                        </svg>
                        Paylaş
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          fill="currentColor"
                          class="bi bi-exclamation-triangle"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"
                          />
                          <path
                            d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"
                          />
                        </svg>
                        Raporla
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="mute">
                {{
                  new Date(poll.creationDate).toLocaleDateString() +
                  " " +
                  new Date(poll.creationDate).toLocaleTimeString()
                }}
              </div>
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
                      >%{{ option.ratio }}</span
                    >
                  </div>
                </div>
              </div>
              <div class="mute vote-count">{{ poll.totalParticipants }} oy</div>
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
    this.$store.dispatch({
      type: "setUsers",
    });

    this.getPolls();

    this.$store.watch(
      () => [this.$store.state.polls, this.$store.state.updated],
      async () => {
        this.polls = this.$store.state.polls;
      }
    );

    this.$store.watch(
      () => [this.$store.state.updated, this.$store.state.newPool],
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
    share(id) {
      navigator.clipboard.writeText(id);
      alert(
        "Anket numarasını kopyaladınız. Arama çubuğundan anketi bulabilirsiniz " +
          id
      );
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
      margin-bottom: 4.5rem;
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
            justify-content: space-between;

            p {
              margin-left: 20px;
            }
          }
          .mute {
            display: flex;
            justify-self: flex-start;
            padding-left: 20px;
            font-size: 85%;
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

          .vote-count {
            padding-left: 58px;
            display: flex;
            font-size: 85%;
          }
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
          right: 6px;
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
  margin-top: 1rem;

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
.three-dot {
  background-color: transparent;
  border: none;
  border-color: transparent;
}
.dropdown-toggle::after {
  display: none;
}
.dropdown-menu {
  min-width: 0px;
}
.dropdown-item {
  font-weight: inherit !important;
}
</style>
