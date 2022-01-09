<template>
  <div id="cover-image-cont">
    <!-- <img src="../../assets/cover.jpg" alt="cover" /> -->
    <nav class="cover-nav">
      <a href="/">
        <img
          src="../../assets/logo_beyaz.svg"
          style="width: 90%; max-height: 114px"
          alt="home"
        />
      </a>
      <div class="d-flex">
        <a
          href="/profilepage"
          id="nav-user"
          class="nav-link login"
          data-toggle="modal"
          data-target="#login-modal"
        >
          <span class="user-name">{{ username }}</span>
        </a>
        <button type="button" class="btn btn-light" @click="logout()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-box-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
            />
            <path
              fill-rule="evenodd"
              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
            />
          </svg>
        </button>
      </div>
    </nav>
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
        <!-- <h3>{{ fullname }}</h3> -->
        <h2 class="user-nickname">@{{ username }}</h2>
      </div>
    </div>
  </div>
</template>
<script>
import store from "store";
import router from "../../router/index";
export default {
  name: "profileCoverComp",
  data() {
    return {
      fullname: "",
      username: "",
      avatarno: 0,
      userInfo: {},
      id: "",
    };
  },
  mounted() {
    this.id = store.get("userInfo").userId;
    console.log("this.id", this.id);
    this.getUserInfo();

    this.$store.watch(
      () => this.$store.state.userInfoUpdated,
      async () => {
        this.getUserInfo();
      }
    );

    this.$store.watch(
      () => this.$store.state.loggedInUserInfo,
      () => {
        this.userInfo = store.get("userInfo");
        console.log("userinfo cover içinde", this.userInfo);

        this.username = this.userInfo.username;
        this.avatarno = this.userInfo.avatarNo;
        this.fullname = this.userInfo.fullName;
      }
    );
  },
  methods: {
    getUserInfo() {
      var id = this.id;
      this.$store.dispatch("setUserInfo", id);
    },
    logout() {
      router.push({ name: "Home" });
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userInfo");
      this.$store.state.isLoggedIn = false;
      store.removeItem("userInfo");
      store.removeItem("token");
      this.avatarno = 0;
    },
  },
};
</script>
<style scope lang="scss">
#cover-image-cont {
  background-image: url("../../assets/cover14-md.jpg");
  //background-color: #f3e9fc;
  height: 315px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .cover-nav {
    width: 90%;
    margin-left: 5%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    background-color: transparent;
    button {
      height: 40px;
      width: 40px;
    }
    .nav-link {
      color: #4f515b;
    }
  }

  #item-profile-avatar {
    display: flex;
    position: relative;
    margin-left: 11%;
    //margin-top: 11%;
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
      color: #4f515b;
      h3 {
        margin-left: 3rem;
      }
      .user-nickname {
        font-size: 1.3rem;
        margin-left: 3rem;
        margin-bottom: 1rem;
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
