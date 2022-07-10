<template>
  <div class="image-loader-container">
    <img
        :src="placeholder"
        class="placeholder"
        v-if="!everyDone"
    >

    <img
        :src="src"
        class="origin"
        @load="originLoaded"
        :style="{
          opacity: originOpacity,
          transition: `${duration}ms`
        }"
    >
  </div>
</template>

<script>
export default {
  name: "ImageLoader",
  props: {
    src: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  data() {
    return {
      // 原始图片是否加载完成
      originLoad: false,
      // 是否全部完成
      everyDone: false
    }
  },
  computed: {
    originOpacity() {
      return this.originLoad ? 1: 0;
    }
  },
  methods: {
    originLoaded() {
      this.originLoad = true;
      setTimeout(() => {
        this.everyDone = true;
        this.$emit("load");
      }, this.duration)
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/common.less";

.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .placeholder {
    filter: blur(1vw);
  }

  .origin {
    opacity: 0;
  }
}

</style>