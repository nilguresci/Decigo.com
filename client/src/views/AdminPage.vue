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
              <div
                class="accordion"
                id="accordionExample"
                v-for="(poll, id) in polls"
                :key="id"
              >
                <div class="accordion-item poll" :id="poll.id">
                  <h5 class="accordion-header question" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      {{ poll.question }}
                    </button>
                  </h5>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <ul class="list-group list-group-flush answers-area">
                        <li
                          class="list-group-item d-flex answers"
                          v-for="option in poll.options"
                          :key="option"
                          :id="option.id"
                        >
                          {{ option.text }}
                        </li>
                        <!-- <li>
                          bu alt kısıma anketi sil butonu linki vs eklenecek.
                          anketi oluşturan kişiye uyarı bildirimi yada maili
                          gidecek
                        </li> -->
                      </ul>
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
        this.polls = this.$store.state.polls;
      }
    );
  },
  methods: {
    getPolls() {
      this.$store.dispatch({
        type: "setPolls",
      });
      this.polls = this.$store.state.polls;
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
  }
  .accordion-button:not(.collapsed) {
    //color: #7442a9;
    background-color: #ffff;
    //padding: 0.5rem 1.25rem;
  }
  .accordion {
    margin: 1rem;
  }
}
</style>
