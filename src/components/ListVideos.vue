<template>
  <div class="item" v-for="video in listVideos?.items" :key="video.etag">
    <div class="item-info">
      <h4 class="item-info-title" v-html="video.snippet.title"></h4>
      <p class="item-info-describle" v-html="video.snippet.description"></p>
      <span
        class="item-info-channel"
        v-html="video.snippet.channelTitle"
      ></span>
    </div>
    <div class="item-image">
      <img :src="video.snippet.thumbnails.default.url" />
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
.item {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fff;
  color: #333;
  text-align: left;
  margin-bottom: 1px;

  :hover{
    background-color: #ddd;
  }

  .item-info {
    .item-info-title {
      font-size: 0.7rem;
    }
    .item-info-describle {
      font-size: 0.6rem;
    }
    .item-info-channel {
      font-size: 0.6rem;
      font-weight: bold;
    }
  }
  .item-image {
    padding: 5px;

    img {
      width: 80px;
      border-radius: 5px;
    }
  }
}
</style>