<template>
  <div class="results">
    <div class="item" v-for="video in listVideos?.items" :key="video.etag">
      <div class="item__info">
        <h4 class="info__title" v-html="video.snippet.title"></h4>
        <p class="info__describle" v-html="video.snippet.description"></p>
        <span class="info__channel" v-html="video.snippet.channelTitle"></span>
      </div>
      <div class="item__image">
        <img :src="video.snippet.thumbnails.default.url" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ListVideos",
  computed: mapState(["listVideos", "inputSearch"]),
};
</script>

<style scoped lang="scss">
.results {    
  .item {
    display: flex;
    justify-content: space-between;
    padding: 25px 25px;
    background-color: rgba(255, 255, 255, 0.95);
    color: #333;
    text-align: left;
    margin-bottom: 1px;    
    &:hover {
      background-color: rgba(255, 255, 255, 1);
    }
    .item__info {
      .info__title {
        font-size: 1.1rem;
        padding-right: 10px;
      }
      .info__describle {
        padding-right: 10px;
        font-size: 0.8rem;
      }
      .info__channel {
        font-size: 0.7rem;
        font-weight: bold;
      }
    }
    .item__image {
      padding: 0px;

      img {
        width: 100px;
        border-radius: 5px;
      }
    }
  }
}
</style>