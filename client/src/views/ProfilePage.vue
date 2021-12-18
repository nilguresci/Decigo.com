<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-main">
        <div class="main-content">
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
                            src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/61a790ce22475-bpfull.jpg"
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

                      <div class="item-meta">
                        <span class="activity">Active 1 minute ago</span>
                      </div>
                      <!-- #item-meta -->

                      <ul class="member-header-actions action">
                        <li class="generic-button">
                          <a
                            class="edit-profile"
                            href="https://mythemestore.com/beehive-preview/members/user/profile/edit/#item-body"
                            data-toggle="tooltip"
                            data-placement="top"
                            data-original-title="Edit profile"
                            >Edit profile</a
                          >
                        </li>
                        <li></li>
                        <li class="generic-button">
                          <a
                            class="update-cover"
                            href="https://mythemestore.com/beehive-preview/members/user/profile/change-cover-image/#item-body"
                            data-toggle="tooltip"
                            data-placement="top"
                            data-original-title="Update cover"
                            >Update cover</a
                          >
                        </li>
                      </ul>
                    </div>
                    <!-- #item-header-content -->
                  </div>
                </div>
              </div>
              <!-- #item-header-cover-image -->
            </div>
            <!-- #cover-image-container -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
};
</script>
