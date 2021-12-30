<template>
  <nav class="navbar decigo-navbar social fixed-top">
    <div class="container">
      <div id="decigo-search" class="decigo-search">
        <!-- <form role="search" id="search-form" class="search-form form-inline">
          <div class="search-field container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search searchbtn"
              viewBox="0 0 16 16"
              @click="search()"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
            <input
              id="search-textfield"
              type="text"
              placeholder="Search..."
              v-model="searchText"
            v-on:keyup.enter="search()"
            />
            <span class="decigo-loading-ring" wfd-invisible="true"></span>
          </div>
          
        </form> -->
        <div id="search-form" class="">
          <div class="search-field container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search searchbtn"
              viewBox="0 0 16 16"
              @click="search()"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
            <input
              type="text"
              id="form1"
              placeholder="Kategori arayın"
              aria-label="Search"
              v-model="searchText"
              v-on:keyup.enter="search()"
            />
          </div>
        </div>

        <!-- <div id="search-result" wfd-invisible="true" style="display: none">
          <div class="search-type members">
            <div class="search-type-title">
              <h5>Members</h5>
            </div>
            <ul class="members">
              <li class="item">
                <a href="#">
                  <div class="thumbnail">
                    <img src="#" class="avatar" />
                  </div>
                  <div class="item-info">
                    <span class="title ellipsis">
                      <strong>John Doe</strong>
                    </span>
                  </div>
                </a>
              </li>
            </ul>
            <a href="#" class="view-all color-primary"
              >View all
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                />
              </svg>
            </a>
          </div>
        </div> -->
      </div>
      <ul id="navbar-user" class="navbar-nav navbar-user" v-show="isLoggedIn">
        <!-- <li class="nav-item">
          <a class="cart-contents nav-link" href="#" title="View Cart"
            ><font-awesome-icon icon="bell" />
          </a>
        </li> -->
        <li class="nav-item">
          <a
            href="/profilepage"
            id="nav-user"
            class="nav-link login"
            data-toggle="modal"
            data-target="#login-modal"
            ><img
              :src="'../../assets/avatars/a' + this.avatarno + '.png'"
              alt=""
            />
            <span class="user-name">@{{ username }}</span>
          </a>
        </li>
        <li>
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
        </li>
      </ul>
      <ul id="navbar-user" class="navbar-nav navbar-user" v-show="!isLoggedIn">
        Decigo.com
      </ul>
    </div>
  </nav>
</template>

<script>
//import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import store from "store";
export default {
  name: "navbar",
  props: {
    msg: String,
  },
  data() {
    return {
      isLoggedIn: false,
      username: "",
      avatarno: 0,
      searchText: "",
    };
  },
  mounted() {
    this.isLoggedIn = localStorage.getItem("isLoggedIn")
      ? (this.isLoggedIn = localStorage.getItem("isLoggedIn"))
      : false;

    this.$store.watch(
      () => this.$store.state.isLoggedIn,
      () => {
        this.isLoggedIn = this.$store.state.isLoggedIn;
      }
    );

    this.avatarno = store.get("userInfo").avatarNo
      ? store.get("userInfo").avatarNo
      : 0;

    if (this.isLoggedIn) {
      this.username = store.get("userInfo").username
        ? store.get("userInfo").username
        : "";
    }
    this.$store.watch(
      () => this.isLoggedIn,
      () => {
        if (this.isLoggedIn) {
          this.username = store.get("userInfo").username
            ? store.get("userInfo").username
            : "";
        }
      }
    );
  },
  methods: {
    logout() {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userInfo");
      this.$store.state.isLoggedIn = false;
      store.removeItem("userInfo");
      this.avatarno = 0;
    },
    search() {
      console.log(this.searchText);
      if (this.searchText.length < 1) {
        alert("Arayacak olduğunuz kategoriyi yazınız lütfen");
      } else {
        console.log(this.searchText);
        this.$store.dispatch("getSurveyByCategory", this.searchText);
      }
    },
  },
  //components: { FontAwesomeIcon },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$primary_1: #383a45;
$secondary_text: #bbbbdc;
$primary_text: #626c72;
$primary_color: #8224e3;
$grey_text: #626c72;

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}
.navbar {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0.5rem 1rem;

  .container {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
}
nav.decigo-navbar {
  padding-left: calc(40px - 15px);
  padding-right: calc((40px - 15px) + 80px);
  padding-top: 0;
  padding-bottom: 0;
  transition: all 0.5s 0.1s;

  .container {
    max-width: 100%;

    -webkit-flex-wrap: nowrap;
    -moz-flex-wrap: nowrap;
    -ms-flex-wrap: none;
    flex-wrap: nowrap;
  }

  .social {
    background: #fff;
    border-bottom: 1px solid #e7edf2;
    -webkit-flex-flow: row nowrap;
    -moz-flex-flow: row nowrap;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    -webkit-justify-content: flex-start;
    -moz-justify-content: flex-start;
    justify-content: flex-start;
    .container {
      -webkit-box-pack: initial;
      -ms-flex-pack: initial;
      -webkit-justify-content: initial;
      -moz-justify-content: initial;
      justify-content: initial;
    }
  }
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 12px;
}

.decigo-search {
  position: relative;
}
.form-inline {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -ms-flex-align: center;
  align-items: center;
}
.search-field {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;

  i {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1rem;
  }
  input[type="text"] {
    background: none;
    width: 100%;
    border: none;
    padding-left: 1.25rem;
  }
}
input[type="text"] {
  width: 100%;
  background-color: #f7f7f7;
  display: block;
  height: 2.5rem;
  padding: 0.375rem 1rem;
  border: 1px solid transparent;
  border-radius: 1.25rem;
  background: none;
  border: none;
  padding-left: 1.25rem;
}
input {
  outline: none !important;
  line-height: 26px;
  color: #626c72;
  overflow: visible;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  a {
    outline: none !important;
    line-height: 26px;
  }
}

nav.decigo-navbar:not {
  height: 77px;
}

#search-result {
  display: none;
  background: #fff;
  max-height: 450px;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 12px;
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 22px;
  box-shadow: 0 5px 40px rgba(58, 46, 68, 0.1);
  z-index: 9999;

  .search-type-title {
    background: #fcfcfc;
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid #e7edf2;

    h5 {
      margin: 0;
      font-size: 1em;
    }
  }

  ul {
    margin: 0;
    padding: 0;
  }

  ul li {
    list-style: none;
    a {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      -moz-align-items: center;
      align-items: center;
      padding: 0.75rem 1.5rem;
      border-bottom: 1px solid #e7edf2;
      text-decoration: none;
      line-height: 1.5;
    }
  }

  a.view-all {
    display: block;
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid #e7edf2;
    line-height: 1.2;

    i {
      float: right;
    }
  }
}

//navbar user
ul.navbar-user {
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  align-items: center;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -moz-box-flex: 0;
  -moz-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  margin-left: auto;
}

.navbar-nav {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;

  .nav-item {
    position: relative;
  }
}

.searchbtn {
  cursor: pointer;
}

ul.navbar-user .nav-item .nav-link {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  position: relative;
  color: $primary_1;
  text-decoration: none;
  display: block;
  svg {
    background-color: #f8f9fb;
    display: block;
    font-size: 0.5rem;
    height: 20px;
    width: 20px;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;

    margin: 0;
    color: #29292d;
    font-size: 0.5rem;
  }

  //padding: 0.125rem 0.75rem;

  span.user-name {
    line-height: 30px;
    margin-right: 0.25rem;
    font-size: 14px;
  }

  .user-name:hover {
    color: $primary_color;
  }
  img {
    width: 30px;
    height: 30px;
    margin-right: 0.25rem;
    border-radius: 50%;
  }
}

a {
  color: #29292d;
  transition: 0.5s;
}
</style>
