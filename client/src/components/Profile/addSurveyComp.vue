<template>
  <div id="add-poll-in-profile">
    <add-poll-comp></add-poll-comp>
  </div>
</template>

<script>
import addPollComp from "../Home/AddSurvey.vue";
export default {
  name: "addSurveyProfilePage",
  components: {
    "add-poll-comp": addPollComp,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
#add-poll-in-profile {
  width: 100%;
  margin-top: 5%;
  margin-bottom: 1rem;
}
</style>
