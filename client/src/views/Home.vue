<template>
  <div class="layout">
    <div class="decigo-social-panel" id="decigo-social-panel">
      <div class="layout-left-side-bar">
        <left-side-bar></left-side-bar>
      </div>
    </div>

    <div class="layout-social site" id="decigo-page">
      <header class="site-header">
        <nav-bar></nav-bar>
      </header>
      <div class="site-content" id="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-8 col-main">
              <home-main-content></home-main-content>
            </div>
            <div class="col-lg-4 aside">
              <div class="layout-right-side-bar">right side</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LeftSideBar from "../components/LeftSideBar.vue";
//import RightSideBar from "../components/RightSideBar.vue";
import Navbar from "../components/navbar.vue";
import HomeMainContent from "../components/Home/HomeMainContent.vue";
export default {
  name: "Home",
  components: {
    "left-side-bar": LeftSideBar,
    //"right-side-bar": RightSideBar,
    "nav-bar": Navbar,
    "home-main-content": HomeMainContent,
  },
};
</script>

<style lang="scss">
.layout {
  //display: grid;
  //grid-template-columns: 334px auto;
  //margin: 0 auto;

  .layout-social {
    //display: block;
  }
}

header.site-header {
  margin-left: 22%;
}
header.site-header:not(.overlay-header) {
  height: 80px;
}

.site-content {
  margin-left: 22%;
  padding-right: 80px;
  transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
}

.decigo-social-panel {
  background: #f8f9fb;
  width: 22%;
  height: 100vh;
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10002;
}

#decigo-page {
  position: relative;
}

.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.col-main {
  padding: 30px 40px 70px 40px;
  min-height: 100vh;
}
</style>
