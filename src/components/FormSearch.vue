<template>  
  <div class="search">    
    <div class="search__form">
      <form @submit.prevent="onSubmit">
        <input
          v-model="inputSearchHome"
          @keyup="sugestoesVagalume"
          @blur="cleanSugestoes"
          type="text"
          placeholder="Pesquise bandas e artistas favoritos..."
          class="form-control"
          list="datalistOptions"
        />
      </form>
      <datalist id="datalistOptions" class="search__sugestoes">
        <option
          class="search-sugestoes-item"
          v-for="item in listSugestoesVagalume?.response.docs"
          :key="item.id"
          @click="getSugestao(item.band)"
        >
          {{ item.band }}
        </option>
      </datalist>
    </div>
    <div class="search-msg" v-if="inputSearch">
      Resultados da busca para "{{ inputSearch }}" no Youtube.
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "FormSearch",
  data() {
    return {
      inputSearchHome: "",
    };
  },
  computed: mapState(["inputSearch", "listSugestoesVagalume"]),
  methods: {
    getSugestao(value) {
      this.inputSearchHome = value;
      this.onSubmit();
      this.cleanSugestoes();
    },
    cleanSugestoes() {
      this.$store.dispatch("cleanSugestoesVagalume");
    },
    sugestoesVagalume() {
      this.$store.dispatch("loadSugestoesVagalume", this.inputSearchHome);
    },
    onSubmit() {
      this.$store.dispatch("loadVideosYouTube", this.inputSearchHome);
      this.$router.push("/results");
    },
  },
};
</script>

<style lang="scss">
.search {
  display: flex;  
  justify-content: center;
  .search__form {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    max-width: 600px;    
    .search__sugestoes {
      background-color: rgba(255, 255, 255, 0.9);
      margin: 0 auto;
      text-align: center;
      width: 100%;
      .search-sugestoes-item {
        padding: 10px 20px;
        border-bottom: 1px solid #999;
        color: #444;
        text-align: left;
        cursor: pointer;
        width: 100%;
      }
    }
  }
  .search-msg {
    padding: 20px;
    font-style: italic;
    font-size: 0.9rem;
    color: #eee;
    text-align: left;
  }
}
</style>px