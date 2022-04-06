<template>
  <div class="search">
    <NameApp />
    <div class="form-search">
      <form @submit.prevent="onSubmit">
        <input
          v-model="inputSearchHome"
          @keyup="sugestoesVagalume"
          type="text"
          placeholder="Pesquise bandas e artistas favoritos..."
        />
      </form>
      <div class="sugestoes-search">
        <div
          class="sugestoes-search-item"
          v-for="item in listSugestoesVagalume?.response.docs"
          :key="item.id"
        >
          <div @click="getSugestao(item.band)">{{ item.band }}</div>
        </div>
      </div>
    </div>
    <div class="msg-search" v-if="inputSearch">
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
  .form-search {
    padding: 10px 0;
    input {
      height: 40px;
      width: 50%;
      border-radius: 4px;
      padding: 0 15px;
      font-size: 1rem;
    }
    .sugestoes-search {
      position: absolute;
      background-color: rgba(255,255,255,.9);      
      margin: 0 auto;
      text-align: center;
      .sugestoes-search-item {
        padding: 10px 0;
        border-bottom: 1px solid #999;
        color: #444;
        text-align: left;        
      }
    }
  }
  .msg-search {
    padding: 20px;
    font-style: italic;
    font-size: .9rem;
    color: #eee;
    text-align: left;
  }
}
</style>