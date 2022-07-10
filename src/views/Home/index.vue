<template>
  <div v-loading="loading" class="home-container"
       ref="homeContainer" @wheel="handleWheel">
    <ul 
      class="carousel-container"
      :style="{
        'margin-top': marginTop+'px'
      }"
      @transitionend="handleTransitionEnd"
      v-if="data && data.length > 0"
    >
      <li class="item-wrap" v-for="item in data" :key="item.id">
        <carousel-item :item="item"></carousel-item>
      </li>
    </ul>

    <div 
      class="arrow arrow-up"
      v-show="curIndex >= 1"
      @click="switchTo(curIndex - 1)"
    >
      <Icon type="arrowUp"></Icon>
    </div>
    <div 
      class="arrow arrow-down"
      v-show="curIndex < data.length - 1"
      @click="switchTo(curIndex + 1)"
    >
      <Icon type="arrowDown"></Icon>
    </div>

    <div class="btns">
      <div 
        class="btn"
        v-for="(item, i) in data"
        :key="item.id"
        :class="{
          active: i === curIndex
        }"
        @click="switchTo(i)"
      ></div>
    </div>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem";
import Icon from "@/components/Icon";
import {mapState} from "vuex"

export default {
  name: "Home",
  data() {
    return {
      curIndex: 0, // 当前显示的是第几个
      containerHeight: 0,
      switching: false,
    };
  },
  components: {
    CarouselItem,
    Icon,
  },
  methods: {
    switchTo(index) {
      this.curIndex = index;
    },
    handleResize() {
      this.containerHeight = this.$refs.homeContainer.clientHeight;
    },
    handleWheel(event) {
      if(this.switching) {
        return;
      }
      if(event.deltaY < -5 && this.curIndex > 0) {
        this.curIndex--;
        this.switching = true;
      } else if(event.deltaY > 5 && this.curIndex < this.data.length - 1) {
        this.curIndex ++;
        this.switching = true;
      }
    },
    handleTransitionEnd() {
      this.switching = false;
    },
    fetchData() {
      return getBanner();
    }
  },
  computed: {
    marginTop() {
      return -this.curIndex * this.containerHeight;
    },
    ...mapState("banner", ["loading", "data"])
  },
  // * 生命周期函数
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize)
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize)
  },
  created() {
    this.$store.dispatch("banner/fetchBanner")
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.home-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .carousel-container {
    width: 100%;
    height: 100%;
    transition:all 500ms;


    .item-wrap {
      width: 100%;
      height: 100%;
    }
  }

  // * 小圆点
  .btns{
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    .btn {
      width: 7px;
      height: 7px;
      border: 2px solid #fff;
      border-radius: 50%;
      background-color: @dark;
      margin: 2px;
      cursor: pointer;

      &.active {
        background-color: #fff;
      }
    }
  }

  // *  arrow 小箭头
  .arrow {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 25px;
    cursor: pointer;
    color: @words;
  }
  @arrowGap: 20px;
  .arrow.arrow-up {
    top: @arrowGap;
    animation: jump-up 5s infinite;
  }
  .arrow.arrow-down {
    bottom: @arrowGap;
    animation: jump-down 5s infinite;
  }
  @jumpGap: 5px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jumpGap);
    }
    50% {
      transform: translate(-50%, -@jumpGap);
    }
    100% {
      transform: translate(-50%, @jumpGap);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jumpGap);
    }
    50% {
      transform: translate(-50%, @jumpGap);
    }
    100% {
      transform: translate(-50%, -@jumpGap);
    }
  }
}
</style>