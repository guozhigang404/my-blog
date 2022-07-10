<template>
  <div v-loading="isLoading" class="about-container">
    <iframe v-if="data" :src="data" frameborder="0"></iframe>
  </div>
</template>

<script>
import fetchData from '../../mixins/fetchData';
import { getAbout } from '../../api/about';
export default {
  name: "About",
  mixins: [fetchData(null)],
  methods: {
    async fetchData() {
      return await getAbout();
    }
  }
}
</script>

<style lang="less" scoped>
.about-container {
  width: 100%;
  height: 100%;
  iframe {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
}
</style>