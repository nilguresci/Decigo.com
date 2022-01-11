<template>
  <div class="noScroll">
    <cover-image-comp></cover-image-comp>
    <page-content-comp></page-content-comp>
  </div>
</template>

<script>
import coverImageComp from "../components/Profile/coverImageComp.vue";
import pageContentComp from "../components/Profile/pageContentComp.vue";
import Swal from "sweetalert2";
import store from "store";
import router from "../router";
export default {
  name: "ProfilePage",
  components: {
    "cover-image-comp": coverImageComp,
    "page-content-comp": pageContentComp,
  },
  data() {
    return {
      errorMsg: "",
      token: "",
    };
  },
  mounted() {
    this.$store.dispatch({
      type: "setMyPolls",
    });

    this.token = store.get("token") ? store.get("token") : "";

    if (this.token === "") {
      this.$store.state.errorMsg = "Lütfen tekrar giriş yapın.";
      setTimeout(() => {
        router.push({ name: "Home" });
      }, 2000);
    }

    this.$store.watch(
      () => this.$store.state.errorMsg,
      () => {
        if (this.$store.state.errorMsg) {
          this.errorMsg = this.$store.state.errorMsg;
          Swal.fire({
            icon: "error",
            title: this.errorMsg,
            showConfirmButton: false,
            timer: 1500,
          });

          setTimeout(() => {
            this.$store.state.errorMsg = "";
          }, 2000);
        }
      }
    );
  },
};
</script>
<style>
.noScroll {
  overflow-x: hidden !important;
}
</style>
