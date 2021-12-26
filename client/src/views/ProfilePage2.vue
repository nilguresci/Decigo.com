<template>
  <div>
    <cover-image-comp></cover-image-comp>
    <page-content-comp></page-content-comp>
  </div>
</template>

<script>
import coverImageComp from "../components/Profile/coverImageComp.vue";
import pageContentComp from "../components/Profile/pageContentComp.vue";
export default {
  name: "ProfilePage",
  components: {
    "cover-image-comp": coverImageComp,
    "page-content-comp": pageContentComp,
  },
};
</script>
