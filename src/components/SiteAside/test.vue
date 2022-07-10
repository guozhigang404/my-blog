<template>
  <div class="test">
    <SiteAside></SiteAside>
  </div>
</template>

<script>
import SiteAside from "./"
import "@/styles/global.less"
export default {
  name: "test",
  components: {
    SiteAside
  }
}
</script>

<style lang="less" scoped>
.test {
  width: 220px;
  height: 650px;
  border: 2px solid #ff2200;
  margin: 0 auto;
}
</style>