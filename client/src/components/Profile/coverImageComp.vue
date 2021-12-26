<template>
  <div id="cover-image-cont">
    <!-- <img src="../../assets/cover.jpg" alt="cover" /> -->
    <div id="item-profile-avatar">
      <div class="item-avatar">
        <a href="#homepagefalan">
          <img
            loading="lazy"
            src="../../assets/baristaAhmet.jpeg"
            class="user-avatar"
            alt="Profile picture of John Doe"
          />
        </a>
      </div>
      <div class="profile-name">
        <h3>John Doe</h3>
        <h2 class="user-nickname">@user</h2>
      </div>
    </div>
  </div>
</template>

<style scope lang="scss">
#cover-image-cont {
  background-image: url("../../assets/cover2.jpg");
  height: 350px;
  width: 100%;
  display: flex;

  #item-profile-avatar {
    display: flex;
    position: relative;
    margin-left: 11%;
    margin-top: 11%;
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
      h3 {
        margin-left: 3rem;
      }
      .user-nickname {
        font-size: 1rem;
        margin-left: 0;
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
