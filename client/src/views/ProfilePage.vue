<template>
  <div class="container" id="profilePage">
    <div class="row">
      <div class="col-lg-12 col-main">
        <main id="main" class="main-content">
          <article
            id="post-0"
            class="
              bp_members
              type-bp_members
              post-0
              page
              type-page
              status-publish
              hentry
              beehive-post
            "
          >
            <div class="entry-content clearfix">
              <div
                id="buddypress"
                class="buddypress-wrap beehive bp-dir-hori-nav alignwide"
              >
                <div
                  id="item-header"
                  role="complementary"
                  data-bp-item-id="3"
                  data-bp-item-component="members"
                  class="users-header single-headers"
                >
                  <div id="cover-image-container">
                    <div id="header-cover-image"></div>

                    <div id="item-header-cover-image">
                      <div class="row">
                        <div class="col-lg-3">
                          <div id="item-header-avatar">
                            <div class="item-avatar">
                              <a
                                href="https://mythemestore.com/beehive-preview/members/user/"
                              >
                                <img
                                  loading="lazy"
                                  src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/61bcd90408e03-bpfull.jpg"
                                  class="avatar user-3-avatar avatar-200 photo"
                                  width="200"
                                  height="200"
                                  alt="Profile picture of John Doe"
                                />
                              </a>
                            </div>
                            <h3 class="profile-name">John Doe</h3>
                          </div>
                          <!-- #item-header-avatar -->
                        </div>

                        <div class="col-lg-9">
                          <div id="item-header-content">
                            <h2 class="user-nicename">@user</h2>

                            <!-- #item-meta -->
                          </div>
                          <!-- #item-header-content -->
                        </div>
                      </div>
                    </div>
                    <!-- #item-header-cover-image -->
                  </div>
                  <!-- #cover-image-container -->
                </div>
                <!-- #item-header -->
              </div>
              <div class="bp-wrap">
                <nav
                  class="
                    main-navs
                    no-ajax
                    bp-navs
                    single-screen-navs
                    horizontal
                    users-nav
                  "
                  id="object-nav"
                  role="navigation"
                  aria-label="Member menu"
                >
                  <div class="row">
                    <div class="col-lg-6 ml-auto mr-auto">
                      <div class="nav-container">
                        <ul class="profile-nav">
                          <li
                            id="activity-personal-li"
                            class="bp-personal-tab current selected loading"
                          >
                            <a
                              href="https://mythemestore.com/beehive-preview/members/user/activity/"
                              id="user-activity"
                              title="Activity"
                            >
                              <span class="nav-link-text" wfd-invisible="true"
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="30"
                                  fill="currentColor"
                                  class="bi bi-person-lines-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"
                                  /></svg
                              ></span>
                            </a>
                          </li>

                          <li id="xprofile-personal-li" class="bp-personal-tab">
                            <a
                              href="https://mythemestore.com/beehive-preview/members/user/profile/"
                              id="user-xprofile"
                              title="Profile"
                            >
                              <span class="nav-link-text"
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="30"
                                  fill="currentColor"
                                  class="bi bi-person"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                                  /></svg
                              ></span>
                              Profile
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </nav>

                <div id="item-body" class="item-body">
                  <div class="row">
                    <div class="col profile-col-main">
                      <!-- .item-list-tabs#subnav -->

                      <h2 class="bp-screen-reader-text">Member Activities</h2>

                      <!-- search & filters -->

                      <div
                        id="activity-stream"
                        class="activity single-user"
                        data-bp-list="activity"
                        style="display: block"
                      ></div>
                      <!-- .activity -->
                    </div>
                  </div>
                </div>
                <!-- #item-body -->
              </div>
              <!-- #buddypress -->
            </div>
            <!-- .entry-contents -->
          </article>
          <!-- #post-0 -->
        </main>
        <!-- #main -->
      </div>
      <!-- .col-main -->
    </div>
    <!-- .row -->
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
};
</script>

<style>
#profilePage {
  font-family: "Nunito Sans", Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
}
#cover-image-container {
  position: relative;
}
#header-cover-image {
  height: 270px;
  background-image: url(https://mythemestore.com/beehive-preview/wp-content/uploads/buddypress/members/3/cover-image/61bcd91e2ac25-bp-cover-image.jpg);
  width: 100vw;
  left: calc(-50vw + 50%);
  border-radius: 0;
  background-color: #c5c5c5;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  border: 0;
  display: block;
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
#item-header-cover-image {
  margin: 0 !important;
  min-height: initial !important;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
}
#item-header-cover-image #item-header-avatar {
  margin-top: 175px;
  float: left;
  overflow: visible;
  width: auto;
  left: 1rem;
  right: 1rem;
  bottom: -90px;
}
#item-header-cover-image #item-header-avatar a {
  border: none;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  position: relative;
  color: #29292d;
  transition: 0.5s;
}
#item-header-avatar {
  overflow: visible;
  width: auto;
  left: 1rem;
  right: 1rem;
  bottom: -90px;
  margin: 0 !important;
  float: none !important;
  text-align: center;
  box-sizing: border-box;
  display: block;
  word-wrap: break-word;
  color: #626c72;
}
#item-header-cover-image #item-header-avatar img.avatar {
  border: solid 2px #fff;
  background: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.75rem;
  border-radius: 1rem;
  float: none;
  height: auto;
  vertical-align: middle;
  box-sizing: border-box;
  width: 200px;
  aspect-ratio: auto 200 / 200;
  text-align: center;
}
#item-header-avatar .item-avatar {
  position: relative;
  text-align: center;
}
#item-header-cover-image #item-header-avatar {
  margin: 0 !important;
  float: none !important;
  text-align: center;
}
div#item-header #item-header-cover-image #item-header-content {
  clear: both;
  width: auto;
  display: flex;
  margin-left: 0px !important;
  margin-top: 20% !important;
  align-items: flex-end;
  float: none !important;
  max-width: initial !important;
  box-sizing: border-box;
}
div#item-header-cover-image h2 {
  color: #fff;
  text-rendering: optimizelegibility;
  text-shadow: 0px 0px 3px rgb(0 0 0 / 80%);
  margin: 0 0 0.6em;
  display: block;
  margin-bottom: 0 !important;
  margin-right: 0.5rem !important;
  font-size: 1.25rem !important;
  line-height: 1.2;
  font-family: "Quicksand", Verdana, sans-serif;
  font-weight: 700;
}
.col-main {
  padding: 0;
}
.profile-name {
  color: #fff;
}

.bp-navs.single-screen-navs.horizontal {
  padding: 1rem 0;
  overflow: initial;
  position: relative;
}
.bp-navs.single-screen-navs.horizontal ul.profile-nav {
  margin-left: 265px !important;
  display: flex;
  white-space: nowrap;
  margin: -1rem;
  padding: 1rem;
  overflow: hidden;
}
.bp-navs.single-screen-navs.horizontal ul.profile-nav li {
  float: none;
}
.bp-navs.single-screen-navs ul li {
  background: none !important;
  display: block;
}
.bp-navs ul li {
  list-style: none;
  margin: 0;
}

.bp-navs.single-screen-navs.horizontal ul.profile-nav {
  display: flex;
  white-space: nowrap;
  margin: -1rem;
  padding: 1rem;
  overflow: hidden;
}
.bp-navs.single-screen-navs.horizontal ul.profile-nav > li.current > a,
.bp-navs.single-screen-navs.horizontal ul.profile-nav > li.selected > a,
.bp-navs.single-screen-navs.horizontal ul.profile-nav > li.has-current > a {
  background: linear-gradient(135deg, #c395f1 0%, #8224e3 75%);
  color: #fff;
}
.bp-navs.single-screen-navs.horizontal ul.profile-nav > li.current > a,
.bp-navs.single-screen-navs.horizontal ul.profile-nav > li.selected > a,
.bp-navs.single-screen-navs.horizontal ul.profile-nav > li.has-current > a {
  background: #5561e2;
  height: 67px;
  width: 72px;
  border-radius: 12px;
  color: #fff;
  box-shadow: 0 10px 20px -8px rgb(58 46 68 / 70%);
}
.bp-navs.single-screen-navs.horizontal ul li a {
  font-size: 90%;
  text-align: center;
  padding-left: 1.125rem;
  padding-right: 1.125rem;
}
.bp-navs.single-screen-navs ul li a {
  position: relative;
}
.bp-navs ul li.selected a,
.bp-navs ul li.current a {
  font-weight: 600;
  opacity: 1;
}
.bp-navs ul li a,
.bp-navs ul li span {
  border: 0;
  display: block;
  padding: 10px 0px;
  text-decoration: none;
}
</style>
