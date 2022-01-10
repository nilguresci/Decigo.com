<template>
  <div>
    <cover-image-comp></cover-image-comp>
    <page-content-comp></page-content-comp>
  </div>
</template>

<script>
import coverImageComp from "../components/Profile/coverImageComp.vue";
import pageContentComp from "../components/Profile/pageContentComp.vue";
import Swal from "sweetalert2";
export default {
  name: "ProfilePage",
  components: {
    "cover-image-comp": coverImageComp,
    "page-content-comp": pageContentComp,
  },
  data() {
    return {
      errorMsg: "",
    };
  },
  mounted() {
    this.$store.dispatch({
      type: "setMyPolls",
    });

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
