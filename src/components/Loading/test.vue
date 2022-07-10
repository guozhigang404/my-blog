<template>
  <div class="test">
    <Loading></Loading>
  </div>
</template>

<script>
import Loading from '@/components/Loading/index'
export default {
  name: "test.vue",
  components: {
    Loading
  }
}
</script>

<style lang="less" scoped>
.test {
  width: 600px;
  height: 600px;
  border: 2px solid #009c9c;
  position: relative;
}
</style>