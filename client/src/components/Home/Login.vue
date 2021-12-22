<template>
  <div class="my-card item">
    <h4 class="form-title">Login Now</h4>
    <form
      method="post"
      id="panel-login-form"
      class="login-form panel-login"
      name="panel-login"
      v-on:submit.prevent="login()"
    >
      <div class="form-group">
        <div class="user-name">
          <label class="screen-reader-text">Email/username</label>
          <span class="icon"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              /></svg
          ></span>
          <input
            type="text"
            id="username"
            class="username-control"
            required=""
            name="log"
            v-model="emailUsername"
            placeholder="Email or username"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="pass">
          <label class="screen-reader-text">Password</label>
          <span class="icon"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-key"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"
              />
              <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /></svg
          ></span>
          <input
            type="password"
            id="password"
            class="password-control"
            required=""
            name="pwd"
            v-model="password"
            placeholder="Password"
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
          Log In
        </button>
      </div>
      <div class="register-link">
        <!-- <a @click="goRegister()">Signup</a> -->
        <button
          type="button"
          class="btn btn-link register-btn"
          @click="goRegister()"
        >
          Signup
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
      emailUsername: "",
      password: "",
    };
  },
  methods: {
    goRegister() {
      this.$store.state.showRegisterComp = true;
    },
    login() {
      var loginData = {
        Username: this.emailUsername,
        Password: this.password,
      };
      this.$store.dispatch({
        type: "setLogin",
        data: loginData,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$primary_1: #383a45;

.panel-block .panel-logo img {
  max-width: 90%;
  max-height: 115px;
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
.panel-block {
  padding: 2.5rem 1rem 1rem;
}
.dark {
  background-color: $primary_1;
  background-image: linear-gradient(135deg, #4f5261 0%, #383a45 50%);
}
.panel-block .item {
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
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
  font-size: 1rem;
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
  font-size: inherit;
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
  padding-left: 2.75em;
}
input[type="text"]:not(:focus),
input[type="password"]:not(:focus) {
  border: 1px solid #e7edf2;
}
input[type="text"]:focus,
input[type="password"]:focus {
  border: 1px solid #8224e3;
}
#panel-login-form {
  div.submit {
    padding-top: 0.25rem;
    margin-top: 0.25rem;
    border-top: 1px solid #e7edf2;
  }
  .register-link {
    margin-top: 0.25rem;
    font-size: 90%;

    .register-btn {
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
