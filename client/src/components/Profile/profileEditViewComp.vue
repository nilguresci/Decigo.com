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
          <label class="form-label edit">Avatarını değiştir</label>
          <div @click="change()">
            <button type="button" class="btn">
              <img
                src="../../assets/avatars/a1.png"
                class="img-thumbnail rounded"
                alt="..."
                style="width: 70px; height: 70px"
              />
            </button>
            <button type="button" class="btn">
              <img
                src="../../assets/avatars/a2.png"
                class="img-thumbnail rounded"
                alt="..."
                style="width: 70px; height: 70px"
              />
            </button>
            <button type="button" class="btn">
              <img
                src="../../assets/avatars/a3.png"
                class="img-thumbnail rounded"
                alt="..."
                style="width: 70px; height: 70px"
              />
            </button>
            <button type="button" class="btn">
              <img
                src="../../assets/avatars/a4.png"
                class="img-thumbnail rounded"
                alt="..."
                style="width: 70px; height: 70px"
              />
            </button>
            <button type="button" class="btn">
              <img
                src="../../assets/avatars/a5.png"
                class="img-thumbnail rounded"
                alt="..."
                style="width: 70px; height: 70px"
              />
            </button>
            <button type="button" class="btn">
              <img
                src="../../assets/avatars/a6.png"
                class="img-thumbnail rounded"
                alt="..."
                style="width: 70px; height: 70px"
              />
            </button>
            <button type="button" class="btn">
              <img
                src="../../assets/avatars/a7.png"
                class="img-thumbnail rounded"
                alt="..."
                style="width: 70px; height: 70px"
              />
            </button>
            <button type="button" class="btn">
              <img
                src="../../assets/avatars/a8.png"
                class="img-thumbnail rounded"
                alt="..."
                style="width: 70px; height: 70px"
              />
            </button>
            <button type="button" class="btn">
              <img
                src="../../assets/avatars/a9.png"
                class="img-thumbnail rounded"
                alt="..."
                style="width: 70px; height: 70px"
              />
            </button>
            <button type="button" class="btn">
              <img
                src="../../assets/avatars/a10.png"
                class="img-thumbnail rounded"
                alt="..."
                style="width: 70px; height: 70px"
              />
            </button>
          </div>
        </div>
        <div class="mb-3 d-flex content-d">
          <label for="formGroupExampleInput" class="form-label edit"
            >Kullanıcı Adın</label
          >
          <input
            type="text"
            class="form-control edit-input"
            id="formGroupExampleInput"
            placeholder="Example input placeholder"
            :value="username"
            @change="change()"
            @keypress="change()"
          />
        </div>

        <div class="mb-3 d-flex content-d">
          <label for="inputEmail4" class="form-label edit">Email</label>
          <input
            type="email"
            class="form-control edit-input"
            id="inputEmail4"
            :value="email"
            @change="change()"
            @keypress="change()"
          />
        </div>
        <div class="change-pass">
          <!-- <button type="button" class="btn">Şifreni değiştir</button> -->
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Şifreni değiştir
          </button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <form>
                  <div class="modal-header">
                    <h6 class="modal-title" id="exampleModalLabel">
                      Şifreni Değiştir
                    </h6>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body change-pass-modal">
                    <div class="row change-pass-item">
                      <label for="inputPassword" class="col-sm-2 col-form-label"
                        >Şifre</label
                      >

                      <div class="col-sm-10 ch-p-input">
                        <input
                          type="password"
                          class="form-control"
                          id="inputPassword"
                          v-model="password"
                        />
                      </div>
                    </div>
                    <div class="row change-pass-item">
                      <label
                        for="inputnewPassword"
                        class="col-sm-2 col-form-label"
                        >Yeni Şifre</label
                      >
                      <div class="col-sm-10 ch-p-input">
                        <input
                          type="password"
                          class="form-control"
                          id="inputnewPassword"
                        />
                      </div>
                    </div>
                    <div class="row change-pass-item">
                      <label
                        for="inputnewPassword2"
                        class="col-sm-2 col-form-label"
                        >Yeni Şifre Tekrar</label
                      >
                      <div class="col-sm-10 ch-p-input">
                        <input
                          type="password"
                          class="form-control"
                          id="inputnewPassword2"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer save-pass">
                    <button type="button" @click="submit()" class="btn">
                      Kaydet
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="save-update" v-if="updated">
          <button type="button" class="btn">Kaydet</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength, sameAs } from "@vuelidate/validators";
export default {
  name: "profileEditComp",
  data() {
    return {
      username: "nil",
      email: "nilguresci@gmail.com",
      avatarNo: "",
      updated: false,
      password: "",
      newPassword: "",
      newPasswordAgain: "",
      submitted: false,
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      //username: { required }, // Matches this.firstName
      // lastName: { required }, // Matches this.lastName
      newPassword: { required, minLength: minLength(6) },
      newPasswordAgain: { required, sameAsPassword: sameAs(this.newPassword) },
      //email: { required, email } // Matches this.contact.email
    };
  },
  methods: {
    change() {
      this.updated = true;
      console.log("tıklandı");
    },
  },
};
</script>
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
      text-align: left;
      .edit-input {
        max-width: 76%;
        font-size: 14px;
        margin-right: 34px;
      }
      .edit {
        margin-right: 15px;
        color: #7442a9;
      }

      .change-pass {
        display: flex;
        justify-content: end;
        width: 96%;
        button {
          font-size: 0.8rem;
          color: #626c72;
          padding: 0 0.75rem;
        }
        button:hover {
          color: #7442a9;
        }

        .change-pass-modal {
          text-align: left;
          .change-pass-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 8px;
            label {
              line-height: 1.3;
              font-size: 14px;
              color: #7442a9;
              width: 26%;
            }
            .ch-p-input {
              width: 72%;
            }
          }
        }

        .save-pass {
          line-height: 1.5;
          button {
            background-color: #7442a9;
            color: #ffff;
            font-size: 0.8rem;
          }
        }
      }

      .save-update {
        display: flex;
        justify-content: end;
        width: 94%;
        margin-top: 10px;
        button {
          background-color: #7442a9;
          color: #ffff;
          font-size: 0.8rem;
          line-height: 1;
        }
      }
      .content-d {
        align-items: baseline;
        padding-left: 11%;
        font-size: 14px;
        justify-content: space-between;
        width: 100%;

        button {
          background: none;
        }
      }
    }
  }
}
</style>
