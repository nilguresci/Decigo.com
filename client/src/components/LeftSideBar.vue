<template>
  <div class="layout-left-side-container">
    <div class="layout-left-side">
      <div class="panel-block dark">
        <a href="#" class="panel-logo item">
          <img src="../assets/logo_beyaz.svg" alt="Italian Trulli" />
        </a>
        <div class="my-card item">
          <div class="info">
            <a href="#myprofilelinki" class="home-user-profile">
              <img
                src="../assets/cv-foto.jpeg"
                alt="Italian Trulli"
                class="user-img"
              />
            </a>
            <div class="profile-name">
              <a href="#userprofilelinki" class="name ellipsis">Nil Güreşçi</a>
              <small>Member</small>
            </div>
          </div>
          <ul class="connections">
            <li>
              <span class="count">10</span>
              <p class="mute">Anketlerim</p>
            </li>
            <li>
              <span class="count">50</span>
              <p class="mute">Oyladıklarım</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="panel-block light">light</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftSideBar",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$primary_1: #383a45;
.layout-left-side {
  position: fixed;
}
.layout-left-side {
  background: #f8f9fb;
  width: 22%;
  height: 100vh;
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10002;
}

.panel-block .panel-logo img {
  max-width: 90%;
  max-height: 115px;
}
img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-style: none;
}
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

    a {
      display: block;
      font-weight: 600;
    }
  }
}
.my-card ul.connections {
  padding-top: 0.5rem;
  margin-top: 0.75rem;
  border-top: 1px solid #e7edf2;
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
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  display: block;
  overflow: hidden;
}
small {
  color: #bbbbdc;
  font-size: 85%;
  font-weight: 400;
}
.user-img {
  border-radius: 50%;
  height: auto;
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
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
</style>
