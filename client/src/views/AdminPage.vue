<template>
  <div class="layout">
    <div class="decigo-social-panel" id="decigo-social-panel">
      <div class="layout-left-side-bar">
        <left-side-bar></left-side-bar>
      </div>
    </div>
    <div class="layout-social site" id="decigo-page">
      <header class="site-header sticky-top">
        <nav-bar></nav-bar>
        <hr />
      </header>
      <div class="site-content" id="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-8 col-main">
              <h5 class="reports-polls-title">Raporlanmış Anketler (25)</h5>

              <div class="accordion" id="accordionPool">
                <div
                  class="accordion-item poll"
                  :id="poll._id"
                  v-for="(poll, poolIndex) in polls"
                  :key="poolIndex"
                >
                  <h5
                    class="accordion-header question"
                    :id="'heading' + poolIndex"
                  >
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="'#collapse' + poolIndex"
                      aria-expanded="true"
                      :aria-controls="'collapse' + poolIndex"
                    >
                      {{ poll.Question }}
                    </button>
                  </h5>
                  <div
                    :id="'collapse' + poolIndex"
                    class="accordion-collapse collapse"
                    :aria-labelledby="'heading' + poolIndex"
                    data-bs-parent="#accordionPool"
                  >
                    <div class="accordion-body" id="acc-body">
                      <ul class="list-group list-group-flush answers-area">
                        <li
                          class="list-group-item d-flex answers"
                          v-for="option in poll.Options"
                          :key="option"
                          :id="option.id"
                        >
                          {{ option.Text }}
                        </li>
                      </ul>
                      <div class="rapor-footer">
                        <button
                          type="button"
                          class="btn btn-outline-* delete-btn"
                          data-bs-toggle="tooltip"
                          data-bs-placement="right"
                          title="Anketi sil"
                          @click="decideReport(true, poll._id, poll.ReportId)"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            />
                          </svg>
                        </button>
                        <div
                          class="remove-btn"
                          data-bs-toggle="tooltip"
                          data-bs-placement="right"
                          title="Raporu sil"
                          @click="decideReport(false, poll._id, poll.ReportId)"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-x-lg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 rightside">
              <right-side-bar></right-side-bar>
              boş
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftSideBarComp from "../components/LeftSideBar.vue";
import Navbar from "../components/navbar.vue";
export default {
  components: {
    //"login-component": LoginComponent,
    "left-side-bar": LeftSideBarComp,
    "nav-bar": Navbar,
  },
  data() {
    return {
      pollCount: 20,
      answersWeight: [40, 40, 20, 100],
      selectedAnswer: -1,
      add: false,
      polls: [],
    };
  },
  mounted() {
    this.getPolls();

    this.$store.watch(
      () => [this.$store.state.polls, this.$store.state.updated],
      async () => {
        this.polls = this.$store.state.reportedPools;
      }
    );
  },
  methods: {
    async getPolls() {
      this.$store.dispatch({
        type: "getReportedPolls",
      });
      this.polls = await this.$store.state.reportedPools;
      console.log("this.polls", this.polls);
    },
    decideReport(decide, SurveyId, ReportId) {
      console.log({ decide, SurveyId, ReportId });
      this.$store.dispatch("decideReport", {
        decide,
        SurveyId,
        ReportId,
      });
      this.polls = this.polls.filter((poll) => poll._id !== SurveyId);
    },
  },
};
</script>

<style scoped lang="scss">
.decigo-social-panel {
  background: #f8f9fb;
  width: 22%;
  height: 100vh;
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
}
.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.col-main {
  display: flex;
  flex-direction: column;
  padding: 30px 40px 70px 40px;
  min-height: 100vh;
  .reports-polls-title {
    display: flex;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    position: relative;
    font-size: 1.2rem;
    font-family: "Quicksand", Verdana, sans-serif;
    font-weight: 500;
    color: #4f515b;
    line-height: 2;
    border-bottom: 2px solid #8224e3;
    max-width: 90%;
  }
}
.site-content {
  margin-left: 22%;
  padding-right: 80px;
  transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
}
.rightside {
  border-left: 1px solid #e7edf2;
  padding: 30px 30px 70px 30px;
  min-height: 100vh;
}
header.site-header {
  margin-left: 22%;
  background-color: #fff;
}
header.site-header:not(.overlay-header) {
  height: 80px;
}
.poll {
  top: 50%;
  margin: 5px 0px 5px 0px;
  width: 100%;
  max-width: 90%;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 20px 5px rgba(35, 30, 128, 0.05);
  .question {
    font-size: 14px;
    display: flex;
    justify-self: flex-start;
  }
  .answers-area {
    .answers {
      font-size: 0.8rem;
      font-weight: 400;
      padding: 0.5rem 0.5rem;
      color: #7442a9;
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
      }
    }
  }

  .poll .answers .answer.selected {
    border: 2px solid #8224e3;
  }
  .accordion-button {
    font-size: 13px;
    color: #7442a9;
    padding: 0.5rem 1.25rem;
    ::after {
      color: #7442a9;
    }
  }
  .accordion-button:not(.collapsed) {
    //color: #7442a9;
    background-color: #ffff;
    //padding: 0.5rem 1.25rem;
  }
  .accordion {
    margin: 1rem;
  }
  #acc-body {
    display: flex;
    ul {
      width: 90%;
    }
    .rapor-footer {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-left: 18px;
      align-items: center;
      .delete-btn {
        margin-left: 2px;
      }
      .delete-btn:hover {
        background-color: #8224e3;
        color: #ffff;
      }
      button {
        color: #8224e3;
        border-color: #8224e3;
        padding: 0.2rem 0.5rem;
        //margin-right: 10px;
      }
      svg {
        width: 15px;
        height: 15px;
      }
    }
  }
  .remove-btn {
    display: flex;
    align-items: center;
    svg {
      color: #8224e3;
    }
  }
}
</style>
