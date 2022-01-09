<template>
  <div class="my-card item">
    <h4 class="form-title">Kaydol</h4>
    <form
      method="post"
      id="panel-login-form"
      class="login-form panel-login"
      name="panel-login"
      v-on:submit.prevent="signUp(data)"
    >
      <div class="form-group">
        <div class="user-name">
          <label class="screen-reader-text">İsim & Soyisim</label>
          <input
            type="text"
            id="username"
            class="username-control"
            required=""
            v-model="data.fullname"
            name="log"
            placeholder="İsim & Soyisim"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="user-name">
          <label class="screen-reader-text">E-Mail</label>
          <input
            type="email"
            id="username"
            class="username-control"
            required=""
            name="log"
            v-model="data.email"
            placeholder="E-Mail"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="user-name">
          <label class="screen-reader-text">Kullanıcı Adı</label>
          <input
            type="text"
            id="username"
            class="username-control"
            required=""
            name="log"
            placeholder="Kullanıcı Adı"
            v-model="data.username"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="pass">
          <label class="screen-reader-text">Şifre</label>
          <input
            type="password"
            id="password"
            class="password-control"
            required=""
            name="pwd"
            placeholder="Şifre"
            v-model="data.password"
          />
        </div>
      </div>
      <div class="login-result"></div>
      <div class="submit">
        <button
          type="submit"
          id="login_submit"
          class="submit-login"
          name="wp-submit"
        >
          Kaydol
        </button>
      </div>
      <div class="login-link">
        <button type="button" class="btn btn-link login-btn" @click="goLogin()">
          Giriş Yap
        </button>
      </div>
      <input
        type="hidden"
        id="panel-login-security"
        name="panel-login-security"
        value="f52122e428"
      /><input type="hidden" name="_wp_http_referer" value="hhhhhh" />
    </form>
  </div>
</template>

<script>
export default {
  name: "LeftSideBar",
  props: {
    msg: String,
  },
  data() {
    return {
      show: false,
      data: {
        fullname: "",
        email: "",
        password: "",
        username: "",
      },
    };
  },
  mounted() {
    // this.$store.watch(
    //   () => this.$store.state.showRegisterComp,
    //   async () => {
    //     this.show = this.$store.state.showRegisterComp;
    //   }
    // );
  },
  methods: {
    goLogin() {
      this.$store.state.showRegisterComp = false;
    },
    signUp(data) {
      var sendData = {
        Fullname: data.fullname,
        Email: data.email,
        Username: data.username,
        Password: data.password,
      };

      this.$store.dispatch({
        type: "setRegister",
        data: sendData,
      });
    },
  },
};
</script>

<style scoped lang="scss">
$primary_1: #383a45;

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

.dark {
  background-color: $primary_1;
  background-image: linear-gradient(135deg, #4f5261 0%, #383a45 50%);
}

.my-card {
  background: #fff;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  position: relative;
  margin: 1rem auto -65px;
  box-shadow: 0 15px 100px rgba(58, 46, 68, 0.6);
}

h4 {
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  margin-top: 0;
  line-height: 1.2;
  color: #4f515b;
  font-size: 1.2rem;
  font-family: "Quicksand", Verdana, sans-serif;
  font-weight: 200;
}

.my-card .form-title {
  margin-bottom: 0.75rem;
}

form {
  display: block;
  margin-top: 0em;
  text-align: center;
}

div {
  display: block;
}

.form-group {
  position: relative;
  margin-bottom: 0.25rem;
}

.screen-reader-text {
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  position: absolute;
  margin: -1px;
  padding: 0;
  height: 1px;
  width: 1px;
  word-wrap: normal !important;
  border: 0 none;
  position: absolute !important;
  top: -10000em;
}
label {
  font-weight: 600;
  font-size: 1em;
  display: inline-block;
  cursor: default;
}

span.icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

input {
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  appearance: auto;
  -webkit-rtl-ordering: logical;
  cursor: text;
  margin: 0;
  font-family: inherit;
  font-size: 0.8rem;
  overflow: visible;
  color: #626c72;
  outline: none !important;
  line-height: 26px;
  border-radius: 1.25rem;
  display: block;
  height: 2.5rem;
  padding: 0.375rem 1rem;
  width: 100%;
  background: transparent;
  padding-left: 0.8rem;
}
input[type="text"]:not(:focus),
input[type="email"]:not(:focus),
input[type="password"]:not(:focus) {
  border: 1px solid #e7edf2;
}
input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus {
  border: 1px solid #8224e3;
}
#panel-login-form {
  div.submit {
    padding-top: 0.25rem;
    margin-top: 0.25rem;
    border-top: 1px solid #e7edf2;
  }
  .login-link {
    margin-top: 0.25rem;
    font-size: 90%;

    .login-btn {
      color: #8224e3;
      text-decoration: solid;
      background: transparent;
    }
  }
}
button {
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-indent: 0px;
  text-shadow: none;
  align-items: flex-start;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  overflow: visible;
  text-transform: none;
  outline: none !important;
  line-height: 26px;
  fill: #8224e3;
  -webkit-appearance: button;
  text-decoration: none;
  cursor: pointer;
  background-size: 200%;
  display: inline-block;
  padding: 0.375rem 2rem;
  padding-top: calc(0.375rem + 1px);
  padding-bottom: calc(0.375rem + 1px);
  border: none;
  min-height: 2.5rem;
  border-radius: 30px;
  text-align: center;
  font-weight: normal;
  background-color: #8224e3;
  background-image: linear-gradient(
    90deg,
    #8224e3 0,
    #a968ec 50%,
    #8224e3 100%
  );
  color: #fff;
}
div.submit button {
  width: 100%;
}
</style>
