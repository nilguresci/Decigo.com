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
              <home-main-content></home-main-content>
            </div>
            <div class="col-lg-4 rightside">
              <right-side-bar></right-side-bar>
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
import RightSideBar from "../components/RightSideBar.vue";
import Navbar from "../components/navbar.vue";
import HomeMainContent from "../components/Home/HomeMainContent.vue";
export default {
  name: "Home",
  components: {
    "left-side-bar": LeftSideBar,
    "right-side-bar": RightSideBar,
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
  background-color: #fff;
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
  z-index: 1000;
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
.rightside {
  border-left: 1px solid #e7edf2;
  padding: 30px 30px 70px 30px;
  min-height: 100vh;
  // ::before {
  //   content: "";
  //   background: #fefefe;
  //   display: block;
  //   height: 100%;
  //   //width: 2500px;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   bottom: 0;
  //   z-index: -99;
  // }
}
</style>
