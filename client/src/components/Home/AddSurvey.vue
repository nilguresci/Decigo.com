<template class="addSurvey">
  <div class="container">
    <div class="row">
      <div class="col-2" style="padding-left: 8px">
        <img
          loading="lazy"
          :src="'../../assets/avatars/a' + this.avatarno + '.png'"
          class="avatar"
          width="200"
          height="200"
          alt="Profile picture of user"
        />
      </div>
      <div class="col" style="padding-left: 0">
        <textarea
          id="surveyInput"
          :class="{ input_survey_deactive: !x, input_survey_active: x }"
          type="text"
          placeholder="Bir soru sor..."
          v-model="surveyQuestion"
          @change="change()"
          @keypress="change()"
        />
      </div>
    </div>

    <div v-if="surveyQuestion || onProfilePage === true">
      <div class="add-survey-body d-flex">
        <div class="survey-i-cont-left d-flex">
          <div
            class="d-flex survey-body-input"
            v-for="(option, index) in options"
            :key="index"
          >
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control option"
                placeholder="Seçenek"
                aria-label="Option 1"
                v-model="option.text"
              />
              <button
                v-if="optionCount > 2"
                class="btn option-button delete"
                type="button"
                @click="deleteOption(option.id)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  class="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          v-if="optionCount < 5"
          style="align-self: end"
          class="add-option-btn"
        >
          <div class="col">
            <button
              class="btn option-button float-end"
              type="button"
              id="button-addon2"
              @click="addOption"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="row add-survey-footer">
        <div class="col">
          <select
            class="form-select form-select-sm kategori"
            aria-label=".form-select-sm example"
            v-model="category"
          >
            <option selected>Kategori</option>
            <option :v-for="(c, id) in categories" :key="id" :value="c">
              {{ c }}
            </option>

            <option value="Moda">Moda</option>
            <option value="Filmler">Filmler</option>
          </select>
        </div>
        <div class="col">
          <input
            class="form-control kategori"
            type="time"
            aria-label=".form-control-sm example"
            v-model="expiryDate"
          />
        </div>
        <div class="col post-survey">
          <input
            type="submit"
            id="survey-submit"
            class="survey-submit"
            value="Anket Paylaş"
            @click="create()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "store";
import Swal from "sweetalert2";
export default {
  name: "add-survey",
  components: {},
  data() {
    return {
      surveyQuestion: "",
      optionCount: 2,
      options: [
        { text: "", id: 1 },
        { text: "", id: 2 },
      ],
      expiryDate: "00:01",
      category: "",
      avatarno: 0,
      onProfilePage: false,
      categories: [
        "Kitaplar",
        "Moda",
        "Filmler",
        "Cilt Bakımı",
        "Yemek",
        "Spor",
        "Teknoloji",
        "Sanat",
        "Dekorasyon",
        "Makyaj",
        "Hayvanlar",
        "Güzellik",
      ].sort(),
    };
  },
  mounted() {
    this.avatarno = store.get("userInfo") ? store.get("userInfo").avatarNo : 0;
    this.$store.watch(
      () => this.$store.state.newPool,
      async () => {
        this.surveyQuestion === "";
      }
    );
    //this.categories = this.$store.state.categoriesList;

    console.log("kkk", this.categories);

    this.$store.state.onProfilePage
      ? (this.onProfilePage = true)
      : (this.onProfilePage = false);

    console.log("comp açıldı", this.onProfilePage);
    this.$store.watch(
      () => this.$store.state.onProfilePage,
      () => {
        this.$store.state.onProfilePage
          ? (this.onProfilePage = true)
          : (this.onProfilePage = false);
      }
    );

    this.$store.watch(
      () => this.$store.state.isLoggedIn,
      () => {
        if (this.$store.state.isLoggedIn) {
          this.avatarno = store.get("userInfo").avatarNo
            ? store.get("userInfo").avatarNo
            : 0;
        } else {
          this.avatarno = 0;
        }
      }
    );

    this.$store.watch(
      () => this.$store.state.pollAdded,
      () => {
        // if (this.$store.state.pollAdded) {
        this.showSuccesAlert();
        // }
        this.surveyQuestion = "";
        this.options = [
          { text: "", id: 1 },
          { text: "", id: 2 },
        ];
        this.expiryDate = "00:01";
        this.optionCount = 2;
        this.category = "";
      }
    );
  },
  methods: {
    addOption() {
      this.optionCount = this.options.length;
      this.options.push({ text: "", id: this.optionCount + 1 });
      this.optionCount = this.options.length;
    },
    deleteOption(id) {
      this.options = this.options.filter((option) => option.id !== id);
      this.optionCount = this.options.length;
    },
    change() {
      if (this.surveyQuestion === "") {
        this.options = [
          { text: "", id: 1 },
          { text: "", id: 2 },
        ];
        this.expiryDate = "00:01";
        this.optionCount = 2;
      }
    },
    create() {
      const check = this.checkForm();
      if (check.err) {
        // check.msg.forEach((msg) => {
        //   alert(msg);
        // });
        Swal.fire({
          icon: "error",
          //title: "Oops...",
          title: "Lütfen tüm alanları doldurduğunuzdan emin olun!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        const options = this.options.map((x) => {
          return { Text: x.text };
        });
        console.log(options);
        console.log(this.surveyQuestion);

        const splited = this.expiryDate.split(":");
        const endDate =
          Date.now() + (splited[0] * 3600000 + splited[1] * 60000);
        console.log(this.category);
        this.$store.dispatch("createPool", {
          Question: this.surveyQuestion,
          Time: endDate,
          Options: options,
          Category: this.category,
        });
      }
    },
    checkForm() {
      let res = { err: false, msg: [] };

      if (this.surveyQuestion.length < 3)
        res = {
          err: true,
          msg: [...res.msg, "Anket sorusu 3 karakterden kısa olamaz"],
        };

      if (this.optionCount < 2)
        res = {
          err: true,
          msg: [...res.msg, "En az iki seçenek olduğundan emin olun"],
        };

      if (this.expiryDate === "00:00")
        res = {
          err: true,
          msg: [...res.msg, "Anket süresi 0 dk olamaz"],
        };

      this.options.forEach((option, index) => {
        if (option.text.length < 3)
          res = {
            err: true,
            msg: [
              ...res.msg,
              `${index + 1} numarali seçenek fazla kısa veya boş`,
            ],
          };
      });

      if (this.category.length < 1)
        res = {
          err: true,
          msg: [...res.msg, `Lütfen kategori seçiniz`],
        };

      return res;
    },
    showSuccesAlert() {
      Swal.fire({
        icon: "success",
        title: "Anket başarılı bir şekilde paylaşıldı.",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.col {
  margin-bottom: 1.5rem !important;
}

.input-group {
  height: 1px !important;
}
.kategori {
  height: 26px !important;
  padding: 0px 5px !important;
  color: #626c72 !important;
  font-size: 13px;
}

.survey-submit {
  -webkit-rtl-ordering: logical;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  letter-spacing: normal;
  word-spacing: normal;
  text-rendering: auto;
  user-select: none;
  white-space: pre;
  align-items: flex-start;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  overflow: visible;
  outline: none !important;
  line-height: 26px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 30px;
  text-align: center;
  font-weight: normal;
  border: none;
  padding: 0.375rem 2rem;
  background-size: 200%;
  color: #fff;

  background-color: #995ed4;

  // background-image: linear-gradient(
  //   90deg,
  //   #8224e3 0,
  //   #a968ec 50%,
  //   #8224e3 100%
  // );
  box-shadow: 0 1px 2px 0 rgba(130, 36, 227, 0.5);
  color: #fff;
  display: block;
  height: 30px px;
  min-height: initial;
  padding-top: 0;
  padding-bottom: 0;
  float: right;
}

.avatar {
  cursor: pointer;
  color: #29292d;
  aspect-ratio: auto 50 / 50;
  box-sizing: border-box;
  vertical-align: middle;
  border-style: none;
  max-width: 100%;
  border-radius: 50%;
  width: 40px;
  height: auto;
}
.option {
  color: #626c72 !important;
  padding: 10px 15px 8px !important ;
  width: 100%;
  border: 1px solid #717a81 !important;
  height: 1.8rem !important;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  outline: none !important;

  border: 1px solid #e7edf2 !important;
}
.option-button {
  //height: 1.8rem !important;
  text-align: center;
  padding: 2px;
  :hover {
    border-radius: 57%;
    background-color: #e6d2f9;
  }

  color: #7442a9;
  border-color: none;
}

.option-button .delete {
  border: none;
  background-color: none;
  :hover {
    border: none;
    background-color: transparent;
  }
}
.input_survey_deactive {
  margin: 0;
  column-count: initial !important;
  cursor: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  text-align: start;
  appearance: auto;
  -webkit-rtl-ordering: logical;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  letter-spacing: normal;
  word-spacing: normal;
  text-rendering: auto;
  box-sizing: border-box;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  overflow: auto;
  color: #626c72;
  border-radius: calc(1.25rem + 1px);
  display: block;
  outline: none !important;
  padding: 10px 15px 8px;
  width: 100%;
  border: 1px solid #e7edf2;
  line-height: 20px;
  background: transparent;
  resize: none;
  height: 40px;
}
.input_survey_active {
  column-count: initial !important;
  cursor: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  text-align: start;
  appearance: auto;
  -webkit-rtl-ordering: logical;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  letter-spacing: normal;
  word-spacing: normal;
  text-rendering: auto;
  outline-offset: 0px;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  overflow: auto;
  color: #626c72;
  border-radius: calc(1.25rem + 1px);
  display: block;
  outline: none !important;
  padding: 10px 15px 8px;
  width: 100%;
  border: 1px solid #e7edf2;
  line-height: 20px;
  border-color: transparent;
  resize: vertical;
  height: auto;
}
.add-survey-body {
  justify-content: space-between;
  margin-bottom: 10px;
  .survey-i-cont-left {
    flex-direction: column;
    width: 95%;
    justify-content: flex-start;
    .survey-body-input {
      //margin-left: 12px;
      margin-bottom: 14px;
      margin-top: 8px;
      input {
        border-radius: calc(1.25rem + 1px);
      }
    }
  }
}

.add-survey-footer {
  margin-top: 2rem;
  select,
  input {
    border-radius: 15px;
  }
  .post-survey {
    margin-left: 0;
    margin-right: 10px;
    padding-left: 0;
  }
}
</style>
