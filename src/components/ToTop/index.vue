<template>
  <div
      class="to-top-container"
      v-show="show"
      @click="handleClick"
  >TOP</div>
</template>

<script>
import eventBus from '@/utils/eventBus'
export default {
  name: "ToTop",
  data() {
    return {
      show:false
    }
  },
  methods: {
    handleClick() {
      eventBus.$emit("setMainScroll", 0);
    },
    handleScroll(dom) {
      if(!dom) {
        this.show = false;
        return null;
      }
      this.show = dom.scrollTop >= 500;
    }
  },
  created() {
    eventBus.$on("mainScroll", this.handleScroll)
  },
  destroyed() {
    eventBus.$off("mainScroll", this.handleScroll);
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.to-top-container {
  background: @primary;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  z-index: 99;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  line-height: 50px;
  color: #fff;
  text-align: center;
}
</style>
