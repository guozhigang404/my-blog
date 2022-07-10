<template>
  <div class="loading-container">
    <img src="@/assets/loading.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style scoped lang="less">
.loading-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>