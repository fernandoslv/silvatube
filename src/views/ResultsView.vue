<template>
  <div>
    <FormSearch/>
    <ListVideos/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListVideos from '@/components/ListVideos.vue'
import FormSearch from '@/components/FormSearch.vue'

export default {
  name: 'ResultsView',
  components: {
    ListVideos, FormSearch
  },
  computed: mapState(["listVideos"]),
}
</script>

<style scoped lang="scss">

</style>