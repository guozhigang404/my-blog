<template>
  <div class="test">
    <Empty></Empty>
  </div>
</template>

<script>
import Empty from '@/components/Empty/index'
export default {
  name: "test",
  components:{
    Empty
  }
}
</script>

<style lang="less" scoped>
.test {
  width: 600px;
  height: 600px;
  border: 2px solid red;
  margin: 0 auto;
  position: relative;
}
</style>