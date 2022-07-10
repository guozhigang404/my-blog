<template>
  <div
    class="carousel-item-container"
    ref="carouselItemContainer"
    @mousemove="handleMousemove"
    @mouseleave="handleMouseleave"
  >
    <div class="carousel-img" ref="carouselImg" :style="carouselImagePos">
      <ImageLoader
        :src="item.bigImg"
        @load="showText"
        :placeholder="item.midImg"
      ></ImageLoader>
    </div>
    <div class="title" ref="title">
      {{ item.title }}
    </div>
    <div class="desc" ref="desc">
      {{ item.description }}
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  name: "CarouselItem",
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: {
        width: 0,
        height: 0,
      },
      innerSize: {
        width: 0,
        height: 0,
      },
      mousePos: {
        x: 0,
        y: 0,
      },
    };
  },
  props: {
    item: {
      type: Object,
    },
  },
  components: {
    ImageLoader,
  },
  computed: {
    carouselImagePos() {
      const extraWidth = this.innerSize.width - this.containerSize.width;
      const extraHeight = this.innerSize.height - this.containerSize.height;
      // 多出来的宽度 / 容器宽度 = left / 鼠标到容器左边的距离
      const left = (-extraWidth / this.containerSize.width) * this.mousePos.x;
      const top = (-extraHeight / this.containerSize.height) * this.mousePos.y;
      return {
        transform: `translate(${left}px, ${top}px)`,
      };
    },
  },
  methods: {
    showText() {
      this.$refs.title.style.opacity = "1";
      this.$refs.title.style.width = "0";
      // 强制让浏览器渲染一次
      this.$refs.title.clientWidth; // reflow
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.desc.style.opacity = "1";
      this.$refs.desc.style.width = "0";
      // 强制让浏览器渲染一次
      this.$refs.desc.clientWidth; // reflow
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    setSize() {
      this.containerSize.width = this.$refs.carouselItemContainer.clientWidth;
      this.containerSize.height = this.$refs.carouselItemContainer.clientHeight;
      this.innerSize.width = this.$refs.carouselImg.clientWidth;
      this.innerSize.height = this.$refs.carouselImg.clientHeight;
      this.resetMousePos();
    },
    handleMousemove(ev) {
      const rect = this.$refs.carouselItemContainer.getBoundingClientRect();
      this.mousePos.x = ev.clientX - rect.left;
      this.mousePos.y = ev.clientY - rect.top;
    },
    handleMouseleave() {
      this.resetMousePos();
    },
    resetMousePos() {
      this.mousePos.x = this.containerSize.width / 2;
      this.mousePos.y = this.containerSize.height / 2;
    },
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.setSize();
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
};
</script>

<style lang="less" scoped>
.carousel-item-container {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  .title,
  .desc {
    position: absolute;
    left: 60px;
    color: #fff;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
    letter-spacing: 3px;
    opacity: 0;
    white-space: nowrap;
    overflow: hidden;
  }
  .title {
    top: calc(50% - 30px);
    font-size: 2rem;
  }
  .desc {
    top: calc(50% + 20px);
  }
  .carousel-img {
    width: 110%;
    height: 110%;
    transition: all 0.25s;
  }
}
</style>