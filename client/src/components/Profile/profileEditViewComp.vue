<template>
  <div class="col-8 body-main d-flex">
    <nav>
      <ul>
        <li>Profile</li>
      </ul>
    </nav>

    <div class="profile">
      <div class="p-heading">
        <h3 class="heading">Profil Bilgilerin</h3>
      </div>
      <div class="content">
        <div class="mb-3 d-flex content-d">
          <label for="formGroupExampleInput" class="form-label"
            >Adın Soyadın</label
          >
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Example input placeholder"
          />
        </div>
        <div class="mb-3 d-flex content-d">
          <label for="formGroupExampleInput2" class="form-label"
            >Kullanıcı Adın</label
          >
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input placeholder"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.body-main {
  //width: 70%;
  padding: 30px 15px 70px 15px;
  flex-direction: column;
  nav {
    margin-bottom: 0.5rem;
    background: transparent;
    width: 100%;
    ul {
      border-bottom: 1px solid #e7edf2;
      width: 100%;
      justify-self: flex-start;
      display: flex;
      padding-left: 11%;
      li {
        border-bottom: 2px solid #8224e3;
        list-style: none;
        margin: 0;
        float: none;
        display: inline-block;
        color: #8224e3;
        font-weight: 600;
        opacity: 1;
      }
    }
  }
  .profile {
    display: flex;
    flex-direction: column;
    .p-heading {
      width: 100%;
      border-bottom: 1px solid #e7edf2;
      display: flex;
    }
    h3 {
      position: relative;
      font-size: 15px;
      padding-left: 11%;
      color: gray;
      font-family: "Quicksand", Verdana, sans-serif;
    }
    .content {
      margin-top: 15px;
      .form-control {
        max-width: 491px;
        font-size: 14px;
      }
      label {
        margin-right: 15px;
        color: #7442a9;
      }
      .content-d {
        align-items: baseline;
        padding-left: 11%;
        font-size: 14px;
      }
    }
  }
}
</style>
