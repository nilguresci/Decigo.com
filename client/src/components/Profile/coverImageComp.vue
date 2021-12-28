<template>
  <div id="cover-image-cont">
    <!-- <img src="../../assets/cover.jpg" alt="cover" /> -->
    <div id="item-profile-avatar">
      <div class="item-avatar">
        <a href="#homepagefalan">
          <img
            loading="lazy"
            :src="'../../assets/avatars/a' + this.avatarno + '.png'"
            class="user-avatar"
            alt="Profile picture of John Doe"
          />
        </a>
      </div>
      <div class="profile-name">
        <h3>{{ fullname }}</h3>
        <h2 class="user-nickname">@{{ username }}</h2>
      </div>
    </div>
  </div>
</template>
<script>
import store from "store";
export default {
  name: "profileCoverComp",
  data() {
    return {
      fullname: "",
      username: "",
      avatarno: 0,
      userInfo: {},
    };
  },
  mounted() {
    this.userInfo = store.get("userInfo");
    console.log();
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      //this.userInfo = this.$store.state.loggedInUserInfo;
      //this.userInfo = localStorage.userInfo;
      this.username = this.userInfo.username;
      this.avatarno = this.userInfo.avatarNo;
      this.fullname = this.userInfo.fullName;
      //this.avatarfilename = "../../assets/avatars/a" + this.avatarno + ".png"; //bunu test edebilmek için username:avatar pass: 123123 ile girmelisin.
      // console.log("userInfo", this.userInfo);
      // console.log("fullname", this.fullname);
    },
  },
};
</script>
<style scope lang="scss">
#cover-image-cont {
  background-image: url("../../assets/cover2.jpg");
  height: 350px;
  width: 100%;
  display: flex;

  #item-profile-avatar {
    display: flex;
    position: relative;
    margin-left: 11%;
    margin-top: 11%;
    justify-content: flex-start;
    .item-avatar {
      position: relative;
      display: flex;
      align-self: end;
      margin-bottom: -47px;
      a {
        display: inline-block;
        text-align: center;
        position: relative;
      }
    }
    .profile-name {
      display: flex;
      flex-direction: column;
      justify-content: end;
      text-align: left;
      h3 {
        margin-left: 3rem;
      }
      .user-nickname {
        font-size: 1rem;
        margin-left: 3rem;
      }
    }

    .user-avatar {
      border: solid 2px #fff;
      margin-bottom: 0.75rem;
      border-radius: 1rem;
      width: 200px;
      height: 200px;
    }
  }
}
</style>
