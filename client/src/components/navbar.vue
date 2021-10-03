<template>
  <nav class="navbar decigo-navbar social fixed-top">
    <div class="container">
      <div id="decigo-search" class="decigo-search">
        <form
          role="search"
          method="get"
          id="search-form"
          class="search-form form-inline"
          action="#link"
        >
          <div class="search-field container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
            <input
              id="search-textfield"
              type="text"
              name="s"
              placeholder="Search..."
              value=""
              autocomplete="off"
              required=""
            />
            <span class="decigo-loading-ring" wfd-invisible="true"></span>
          </div>
          <!-- 
          <div class="search-button">
            <button type="submit" class="search-submit"></button>
          </div>  -->
        </form>
        <div id="search-result" wfd-invisible="true" style="display: none">
          <div class="search-type members">
            <div class="search-type-title">
              <h5>Members</h5>
            </div>
            <ul class="members">
              <li class="item">
                <a
                  href="https://mythemestore.com/beehive-preview/members/user/"
                >
                  <div class="thumbnail">
                    <img
                      src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6158a8408e436-bpthumb.jpg"
                      class="avatar"
                    />
                  </div>
                  <div class="item-info">
                    <span class="title ellipsis">
                      <strong>John Doe</strong>
                    </span>
                  </div>
                </a>
              </li>
            </ul>
            <a
              href="https://mythemestore.com/beehive-preview/members/?s=john%20doe"
              class="view-all color-primary"
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
        </div>
      </div>
      <ul id="navbar-user" class="navbar-nav navbar-user">
        <li class="mini-cart nav-item">
          <a
            class="cart-contents nav-link"
            href="https://mythemestore.com/beehive-preview/cart/"
            title="View Cart"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bag"
              viewBox="0 0 32 32"
            >
              <path
                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
              /></svg
          ></a>
        </li>
        <li class="nav-item">
          <a
            href="#"
            class="nav-link login"
            data-toggle="modal"
            data-target="#login-modal"
            >Login</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
//import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "navbar",
  props: {
    msg: String,
  },
  //components: { FontAwesomeIcon },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
  margin-top: 10px;
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

  .beehive-loading-ring {
    display: none;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
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
.beehive-loading-ring {
  display: inline-block;
}
/*
.search-form button[type=submit] {
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    text-align: center;
    line-height: 2.5rem;
    font-size: 1.125rem;
    position: absolute;
    right: 0;
    top: 0;
    display: none !important;
}  */

nav.decigo-navbar:not {
  height: 80px;
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

ul.navbar-user .nav-item .nav-link {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  position: relative;

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
  a {
    padding: 0.125rem 0.75rem;
    text-decoration: none;
    display: block;
  }
}

a {
  color: #29292d;
  transition: 0.5s;
}
</style>
