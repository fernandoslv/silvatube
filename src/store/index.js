
const ApiKeyYoutube = process.env.VUE_APP_KEY_YOUTUBE;
const ApiKeyVagalume = process.env.VUE_APP_KEY_VAGALUME;
const urlApiYoutube = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&key=${ApiKeyYoutube}&type=video&order=relevance&q='`;
const urlVagalume = `https://api.vagalume.com.br/search.art?apikey=${ApiKeyVagalume}&limit=10&q=`;

import { createStore } from 'vuex'

export default createStore({
  state: {
    inputSearch: '',
    listVideos: null,
    listSugestoesVagalume: null
  },
  getters: {
  },
  mutations: {
    loadVideosYouTube(state, listVideos) {
      state.listVideos = listVideos;
    },
    stateInputSearch(state, term) {
      state.inputSearch = term;
    },
    loadSugestoesVagalume(state, listSugestoes) {
      state.listSugestoesVagalume = listSugestoes;
    },
    cleanSugestoesVagalume(state){
      state.listSugestoesVagalume = null;
    }
  },
  actions: {
    cleanSugestoesVagalume({commit}){
      commit('cleanSugestoesVagalume');
    },
    loadSugestoesVagalume({ commit }, term) {
      fetch(urlVagalume + term)
        .then(res => res.json())
        .then(data => {
          commit('loadSugestoesVagalume', data);
        }
        )
    },
    loadVideosYouTube({ commit }, term) {
      fetch(urlApiYoutube + term)
        .then(res => res.json())
        .then(data => {
          commit('loadVideosYouTube', data);
          commit('stateInputSearch', term);
        }
        )
    },
  },
  modules: {
  }
})
