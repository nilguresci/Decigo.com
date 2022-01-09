<template>
  <div class="my-card item">
    <div class="info">
      <a href="profilepage" class="home-user-profile">
        <img
          :src="'../../assets/avatars/a' + this.avatarno + '.png'"
          alt="Avatar"
          class="user-img"
        />
      </a>
      <div class="profile-name">
        <a href="profilepage" class="name ellipsis">{{ username }}</a>
        <small>Member</small>
      </div>
    </div>
    <ul class="connections">
      <li>
        <span class="count">{{ pollsCount }}</span>
        <p class="mute">Anketler</p>
      </li>
      <!-- <li>
        <span class="count">50</span>
        <p class="mute">Oyladıklarım</p>
      </li> -->
    </ul>
  </div>
</template>

<script>
import store from "store";
export default {
  name: "LeftSideUser",
  data() {
    return {
      username: "",
      userInfo: {},
      avatarno: 0,
      //avatarfilename: "../../assets/avatars/a0.png",
      pollsCount: 0,
    };
  },
  mounted() {
    this.userInfo = store.get("userInfo");
    this.getUserInfo();

    // this.$store.watch(
    //   () => this.$store.state.loggedInUserInfo,
    //   () => {
    //     this.userInfo = localStorage.userInfo; // this.$store.state.loggedInUserInfo =localStorage.getItem("userInfo");
    //   }
    // );

    this.$store.dispatch({
      type: "setMyPolls",
    });

    this.$store.watch(
      () => [this.$store.state.loggedinPolls, this.$store.state.updated],
      async () => {
        this.pollsCount = this.$store.state.loggedinPolls.length;
        console.log("polls count", this.pollsCount);
      }
    );
  },
  methods: {
    getUserInfo() {
      //this.userInfo = this.$store.state.loggedInUserInfo;
      //this.userInfo = localStorage.userInfo;
      this.username = this.userInfo.username;
      this.avatarno = this.userInfo.avatarNo;
      //this.avatarfilename = "../../assets/avatars/a" + this.avatarno + ".png"; //bunu test edebilmek için username:avatar pass: 123123 ile girmelisin.
      console.log("userInfo", this.userInfo);
      console.log("avatarno", this.avatarno);
    },
  },
};
</script>

<style scoped lang="scss">
$primary_1: #383a45;
$secondary_text: #bbbbdc;
$primary_text: #626c72;
$primary_color: #8224e3;
$grey_text: #626c72;
.my-card {
  p {
    margin-bottom: 0;
  }
}
.my-card:before {
  content: "";
  background: #fff;
  width: 90%;
  height: 95%;
  border-radius: 12px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: -12px;
  z-index: -1;
  box-shadow: 0 15px 100px rgba(58, 46, 68, 0.6);
}
.my-card .home-user-profile {
  display: inline-block;
  position: relative;
  margin-bottom: 0.75rem;
  // ::before {
  //   content: url("../../assets/ring.png");
  //   position: absolute;
  //   left: 50%;
  //   transform: translateX(-50%);
  //   top: -6px;
  // }
  border: 1px solid #bbbbdc;
  border-radius: 50%;
  padding: 3px;
  img.user-img {
    width: 50px;
    box-shadow: 0 7px 35px rgba(58, 46, 68, 0.1);
  }
}
.my-card .profile-name {
  line-height: 1.5;
  .name {
    font-size: 1rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
    color: $primary_1;
    text-decoration: none;
    a {
      display: block;
      font-weight: 600;
    }
  }
  a:hover {
    color: $primary_color;
    text-decoration: underline;
  }
}
.my-card ul.connections {
  padding-top: 0.5rem;
  margin-top: 0.75rem;
  border-top: 1px solid #e7edf2;
}
.my-card {
  background: #fff;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  position: relative;
  margin: 1rem auto -65px;
  box-shadow: 0 15px 100px rgba(58, 46, 68, 0.6);
}

.ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  display: block;
  overflow: hidden;
}

ul.connections {
  margin-bottom: 0;
  padding: 0;
  text-align: center;

  li {
    list-style: none;
    display: inline-block;
    padding: 0 0.5rem;
    line-height: 1.75;
    border: none !important;

    p {
      margin: 0;
      line-height: 1;
    }
    .count {
      font-size: 1rem;
      font-weight: 600;
    }
  }
}
.mute {
  font-size: 90%;
  color: #bbbbdc;
}
</style>
