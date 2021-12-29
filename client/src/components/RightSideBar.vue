<template>
  <div class="layout-right-side-bar">
    <div class="right-side-content">
      <div class="categories">
        <h5 class="categories-title">Kategoriler</h5>
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
      <div class="bottom-nav"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rightSideBar",
  data() {
    return {
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
  methods: {
    async goToCategory(category) {
      console.log("category", category);
      this.$store.dispatch("getSurveyByCategory", category);
      console.log(
        "await this.$store.state.categorySurveys",
        await this.$store.state.categorySurveys
      );
    },
  },
};
</script>

<style lang="scss">
$secondary_text: #bbbbdc;
$primary_text: #626c72;
$primary_color: #8224e3;
$grey_text: #626c72;
.layout-right-side-bar {
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
        border-bottom: 2px solid #8224e3;
        max-width: 31.5%;
      }

      ul.categories-list {
        list-style: none;
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
          a.text-list {
            padding-left: 5px;
            padding-top: 0;
            white-space: nowrap;
            text-overflow: ellipsis;
            display: block;
            overflow: hidden;
            text-decoration: none;
            color: #626c72;
          }
          a:hover {
            text-decoration: underline;
            color: $primary_color;
          }
        }
      }
    }
  }
}
</style>
