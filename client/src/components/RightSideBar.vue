<template>
  <div class="layout-right-side-bar">
    <div class="right-side-content">
      <div class="categories">
        <h5 class="categories-title">
          Kategoriler
          <div class="line"></div>
        </h5>
        <ul class="categories-list">
          <li v-for="(category, index) in categories" :key="index">
            <a
              class="text-list"
              href="#"
              @click.prevent="goToCategory(category)"
              >{{ category }}</a
            >
          </li>
        </ul>
      </div>
      <div class="bottom-nav d-flex">
        <a href="#" @click="aboutUs()">Hakkımızda</a>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "rightSideBar",
  data() {
    return {
      categories: this.$store.state.categoriesList.sort(),
    };
  },
  methods: {
    async goToCategory(category) {
      console.log("category", category);

      this.$store.dispatch("getSurveyByCategory", category);
      console.log(
        "await this.$store.state.categorySurveys",
        this.$store.state.categorySurveys
      );
    },
    aboutUs() {
      Swal.fire({
        title: "Nil Güreşçi - Ahmet Sait Çalışır",
        //text: "Manisa Celal Bayar Üniversitesi Yazılım Mühendisliği son sınıf öğrencileriyiz.",
        html:
          "Manisa Celal Bayar Üniversitesi yazılım mühendisliği son sınıf öğrencileriyiz." +
          "<br>" +
          '<a href="https://github.com/nilguresci">Nil Güreşçi - Github</a> ' +
          '<a href="https://github.com/AhmetSaitCalisir">Ahmet Sait Çalışır - Github</a> ',
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff",
        backdrop: `
    rgba(0,0,123,0.4)
    url("../assets/nyan-cat.gif")
    left top
    no-repeat
  `,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Teşekkürler!',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$secondary_text: #bbbbdc;
$primary_text: #626c72;
$primary_color: #8224e3;
$grey_text: #626c72;
.layout-right-side-bar {
  ul,
  li {
    display: block;
    list-style-type: square !important;
  }
  position: fixed;

  .right-side-content {
    height: 100%;
    padding-left: 2rem;

    .categories {
      padding: 2rem;
      background-color: #fcf9fe; //f7f1fd
      border-radius: 12px;
      width: 350px;

      h5.categories-title {
        display: flex;
        margin-bottom: 1 rem;
        padding-bottom: 1 rem;
        position: relative;
        font-size: 1rem;
        font-family: "Quicksand", Verdana, sans-serif;
        font-weight: 500;
        color: #4f515b;
        line-height: 1.2;
        max-width: 31.5%;
        padding-bottom: 1rem;
        .line {
          background: #8224e3;
          content: "";
          height: 2px;
          width: 40px;
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }

      ul.categories-list {
        //list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        //justify-content: flex-start;
        svg {
          padding: 0;
        }
        li {
          display: flex;
          justify-content: flex-start;
          padding-left: 0;
          align-items: center;
          margin: 5px 5px 5px 0;
          a.text-list {
            padding-left: 5px;
            padding-top: 0;
            white-space: nowrap;
            text-overflow: ellipsis;
            display: block;
            overflow: hidden;
            text-decoration: none;
            color: #626c72;
            //list-style-type: circle;
          }
          a:hover {
            //text-decoration: underline;
            color: $primary_color;
          }
        }
      }
    }

    .bottom-nav a {
      color: #bbbbdc;
      transition: 0.5s;
      font-size: 14px;
      cursor: pointer;
      margin-left: 38px;
    }
  }
}
</style>
