<template>
  <div class="test">
    <Layout>
      <template #left>
        <div class="left">left</div>
      </template>

      <template #default>
        <div class="main">main</div>
      </template>

      <template #right>
        <div class="right">right</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./"

export default {
  name: "test",
  components: {
    Layout
  }
}
</script>

<style lang="less" scoped>
.test {
  width: 70%;
  height: 600px;
  border: 2px solid #002020;
  margin: 0 auto;
  .left {
    width: 100px;
    background-color: #6b9eee;
  }

  .right {
    width: 200px;
    background-color: #ff2200;
  }
}
</style>