<template>
  <div class="search">
    <NameApp />
    <div class="search-form">
      <form @submit.prevent="onSubmit">
        <input
          v-model="inputSearchHome"
          @keyup="sugestoesVagalume"
          @blur="cleanSugestoes"
          type="text"
          placeholder="Pesquise bandas e artistas favoritos..."
        />
      </form>
      <div class="search-sugestoes">
        <div
          class="search-sugestoes-item"
          v-for="item in listSugestoesVagalume?.response.docs"
          :key="item.id"
          @click="getSugestao(item.band)"
        >
          {{ item.band }}
        </div>
      </div>
    </div>
    <div class="search-msg" v-if="inputSearch">
      Resultados da busca para "{{ inputSearch }}" no Youtube.
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NameApp from "@/components/NameApp.vue";

export default {
  components: { NameApp },
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
  flex-direction: column;
  justify-content: center;
  .search-form {
    padding: 10px 0;
    display: flex;
    flex-direction: column;    
    justify-content: center;
    min-width: 500px;
    max-width: 500px;    
    input {
      height: 40px;      
      border-radius: 4px;
      padding: 0 15px;
      font-size: 1rem;      
      width: 100%;
    }
    .search-sugestoes {      
      background-color: rgba(255,255,255,.9);      
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
    font-size: .9rem;
    color: #eee;
    text-align: left;
  }
}
</style>