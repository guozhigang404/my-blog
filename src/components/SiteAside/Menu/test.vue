<template>
  <div class="test">
    <Menu></Menu>
  </div>
</template>

<script>
import "@/styles/global.less"
import Menu from "./index"
export default {
  name: "test",
  components: {
    Menu
  }
}
</script>

<style lang="less" scoped>
.test {
  width: 350px;
  height: 600px;
  padding-top: 200px;
  background-color: #202020;
}
</style>