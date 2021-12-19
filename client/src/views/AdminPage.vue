<template>
  <div class="layout">
    <div class="decigo-social-panel" id="decigo-social-panel">
      <div class="layout-left-side-bar">
        <!-- <left-side-bar v-if="isLoggedIn"></left-side-bar> -->
        <login-component></login-component>
      </div>
    </div>
  </div>
</template>

<script>
import LoginComponent from "../components/Admin/AdminLogin.vue";
export default {
  components: {
    "login-component": LoginComponent,
  },
};
</script>

<style lang="scss">
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
</style>
