<template>
  <div class="test">
    <ImageLoader
        src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
        placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
        @load="load"
    />
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader/index'

export default {
  name: "test",
  components: {
    ImageLoader
  },
  methods: {
    load() {
      console.log("加载完成")
    }
  }
}
</script>

<style lang="less" scoped>
.test {
  width: 500px;
  height: 350px;
  border: 2px solid;
  margin: 0 auto;
}
</style>