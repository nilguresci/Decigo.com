<template>
  <div class="page-content">
    <nav class="d-flex">
      <div class="content-nav">
        <h3 class="col-3"></h3>
        <div class="tabs col-9">
          <ul class="profile-nav">
            <button
              type="button"
              class="btn btn-light"
              :class="[activity ? '' : 'nothere']"
              @click="changetab()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-subtract"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"
                />
              </svg>
              <span class="" v-show="!activity">Activity</span>
            </button>
            <button
              type="button"
              class="btn btn-light"
              :class="[profile ? '' : 'nothere']"
              @click="changetab()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-workspace"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                />
                <path
                  d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"
                />
              </svg>
              <span class="" v-show="!profile">Profile</span>
            </button>
          </ul>
        </div>
      </div>
    </nav>
    <div class="page-body d-flex">
      <div class="col-2 body-left"></div>
      <div class="col-8 body-main d-flex" v-if="activity">
        <nav>
          <ul>
            <li>Anketlerim</li>
          </ul>
        </nav>
        <div class="nopollmsg" v-if="nopoll">
          <h6>{{ noPollErrMsg }}</h6>
        </div>
        <div class="poll-cont">
          <div
            class="poll"
            :id="$index"
            v-for="(poll, $index) in polls"
            :key="$index"
          >
            <div class="poll-header">
              <div class="question">{{ poll.question }}</div>
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
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
                    <a
                      class="dropdown-item"
                      href="#"
                      @click.prevent="deleteMyPoll(poll.id)"
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
                      Sil
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
                      Düzenle
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
            <div class="answers-area">
              <div class="answers" v-for="option in poll.options" :key="option">
                <div class="answer" :id="option.id">
                  {{ option.text }}
                  <span
                    class="pb percentage-bar"
                    id="pb"
                    :style="{
                      width: option.ratio + '%',
                    }"
                  ></span>
                  <span class="pv percentage-value" id="pv"
                    >{{ option.ratio }}%</span
                  >
                </div>
              </div>
            </div>
            <div class="mute">{{ poll.totalParticipants }} oy</div>
          </div>
        </div>
      </div>
      <profile-edit-view-comp v-if="!activity"></profile-edit-view-comp>
      <div class="col-2 body-right"></div>
    </div>
  </div>
</template>
<script>
import profileEditViewComp from "./profileEditViewComp.vue";
export default {
  name: "pagecontentcomp",
  data() {
    return {
      activity: true,
      profile: false,
      polls: [],
      nopoll: false,
      noPollErrMsg: "",
    };
  },
  components: {
    "profile-edit-view-comp": profileEditViewComp,
  },
  mounted() {
    this.getMyPolls();

    this.$store.watch(
      () => [this.$store.state.loggedinPolls, this.$store.state.updated],
      async () => {
        this.polls = this.$store.state.loggedinPolls;
      }
    );

    this.$store.watch(
      () => this.$store.state.updated,
      async () => {
        this.polls = this.$store.state.loggedinPolls;
      }
    );
    this.$store.watch(
      () => this.$store.state.noPollErrMsg,
      async () => {
        this.nopoll = true;
        this.noPollErrMsg = this.$store.state.noPollErrMsg;
      }
    );
  },
  methods: {
    getMyPolls() {
      console.log("sfds");
      this.$store.dispatch({
        type: "setMyPolls",
      });
    },
    changetab() {
      this.activity = !this.activity;
      this.profile = !this.profile;
    },
    deleteMyPoll(id) {
      this.$store.dispatch("setDeleteMySurvey", id);
      this.polls = this.polls.filter((poll) => poll.id !== id);
    },
  },
};
</script>
<style lang="scss" scoped>
.page-content {
  position: relative;
  margin-right: 15%;
  margin-left: 15%;
  display: flex;
  flex-direction: column;

  .content-nav {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: baseline;

    h3 {
      margin-top: 2.5rem;
      padding-right: 12rem;
    }
    .tabs {
      flex-grow: 3;
      .profile-nav {
        display: flex;
        white-space: nowrap;
        margin: -1rem;
        padding: 1rem;
        overflow: hidden;
        gap: 15px;
        margin-top: 0.75rem;

        button {
          background: linear-gradient(135deg, #c395f1 0%, #8224e3 75%);
          color: #fff;
          border-radius: 12px;
          box-shadow: 0 10px 20px -8px rgba(58, 46, 68, 0.7);
          font-size: 90%;
          text-align: center;
          width: 70px;
          height: 70px;
        }

        .nothere {
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: none;
          color: gray;
          svg {
            flex-grow: 3;
            justify-self: center;
            align-self: center;
          }
          span {
            font-size: 0.7rem;
            display: flex;
            align-self: center;
          }
        }
        li {
          float: none;
          background: none !important;
          display: block;
          list-style: none;
          margin: 0;
          a {
            background: linear-gradient(135deg, #c395f1 0%, #8224e3 75%);
            color: #fff;
            height: 67px;
            width: 72px;
            border-radius: 12px;
            box-shadow: 0 10px 20px -8px rgba(58, 46, 68, 0.7);
            font-size: 90%;
            text-align: center;
            padding-left: 1.125rem;
            padding-right: 1.125rem;
          }
        }
      }
    }
  }

  .page-body {
    //justify-content: space-between;
    margin-top: 20px;
    border-top: 1px solid #e7edf2;
    .body-left {
      //width: 10%;
      border-right: 1px solid #e7edf2;
    }
    .body-right {
      //width: 10%;
      border-left: 1px solid #e7edf2;
    }
    .body-main {
      //width: 70%;
      padding: 30px 15px 70px 15px;
      flex-direction: column;
      nav {
        margin-bottom: 1.5rem;
        background: transparent;
        width: 100%;
        ul {
          border-bottom: 1px solid #e7edf2;
          width: 100%;
          justify-self: flex-start;
          display: flex;
          padding-left: 11%;
          li {
            border-bottom: 2px solid #8224e3;
            list-style: none;
            margin: 0;
            float: none;
            display: inline-block;
            color: #8224e3;
            font-weight: 600;
            opacity: 1;
          }
        }
      }
      .nopollmsg {
        display: flex;
        padding-left: 11%;
        color: #626c72;
      }
      .poll-cont {
        top: 7%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        justify-items: flex-start;
        position: relative;
      }
      #0 {
        margin-top: 3rem !important;
        background-color: red;
      }
      .poll {
        left: 50%;
        margin-bottom: 2rem;
        transform: translate(-50%, -50%);
        width: 94%;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0px 0px 20px 5px rgba(35, 30, 128, 0.05);
        position: relative;
        display: flex;
        flex-direction: column;
        height: auto;
        margin-top: 15px;
        .poll-header {
          justify-content: space-between;
          display: flex;
          align-items: baseline;
        }
        .three-dot {
          background-color: transparent;
          border: none;
          border-color: transparent;
          margin-right: 5px;
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
        .mute {
          display: flex;
          justify-self: flex-start;
          padding-left: 42px;
          font-size: 85%;
          color: #bbbbdc;
          margin-bottom: 15px;
        }
      }
      .poll .question {
        margin-top: 20px;
        font-size: 14px;
        margin-bottom: 5px;
        display: flex;
        justify-self: flex-start;
        padding-left: 42px;
      }

      .answers-area {
        .answers {
          margin-left: 2.5rem;
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
            //cursor: pointer;
            overflow: hidden;
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
        z-index: -1;
        transition: width 300ms ease-in-out;
      }
    }
  }
}
</style>
