<template>
  <div class="navb">
    <nav class="navbar decigo-navbar social fixed-top">
      <div class="container">
        <div id="decigo-search" class="decigo-search">
          <form
            role="search"
            method="get"
            id="ajax-search-form"
            class="ajax-search-form form-inline"
            action="#link"
          >
            <div class="search-field">
              <i class="icon ion-android-search"></i>
              <input
                id="ajax-search-textfield"
                type="text"
                name="s"
                placeholder="Search..."
                value=""
                autocomplete="off"
                required=""
              />
              <span class="beehive-loading-ring" wfd-invisible="true"></span>
            </div>
            <div class="search-button">
              <button type="submit" class="search-submit"></button>
            </div>
          </form>
          <div id="ajax-search-result" wfd-invisible="true"></div>
        </div>
      </div>
    </nav>
  </div>
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
nav.fixed-top {
  left: 22%;
}
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
  /* i {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1rem;
  } */
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
}
</style>
