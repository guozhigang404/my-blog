<template>
  <div class="pager-container" v-if="pageNumber > 1">
    <a
      :class="{
        disabled: current === 1
      }"
      @click="handleClick(1)"
      >首页</a
    >
    <a
      :class="{
        disabled: current === 1
      }"
      @click="handleClick(current - 1)"
      >上一页</a
    >

    <a
      v-for="(n, i) in visibleNumberArr"
      :key="i"
      :class="{
        active: n === current
      }"
      @click="handleClick(n)"
    >{{n}}</a>

    <a
      :class="{
        disabled: current === pageNumber
      }"
      @click="handleClick(current + 1)"
      >下一页</a
    >
    <a
      :class="{
        disabled: current === pageNumber
      }"
      @click="handleClick(pageNumber)"
      >尾页</a
    >
  </div>
</template>

<script>
export default {
  name: "Pager",
  props: {
    // * 当前页码
    current: {
      type: Number,
      default: 1,
    },
    // * 总数据量
    total: {
      type: Number,
      default: 0,
    },
    // * 页容量
    limit: {
      type: Number,
      default: 10,
    },
    // * 可见页码数
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },

    visibleMinNumber() {
      let num = this.current - Math.floor(this.visibleNumber / 2);
      if(num < 1) {
        num = 1;
      }
      return num;
    },

    visibleMaxNumber() {
      let num = this.visibleMinNumber + this.visibleNumber - 1;
      if(num > this.pageNumber) {
        num = this.pageNumber;
      }
      return num;
    },

    visibleNumberArr() {
      let arr = [];
      for(let i = this.visibleMinNumber; i <= this.visibleMaxNumber; i++) {
        arr.push(i);
      }
      return arr;
    }
  },
  methods: {
    handleClick(newNumber) {
      // 组件事件：pageChange
      if(newNumber === this.current) {
        return null;
      }

      if(newNumber < 1) {
        newNumber = 1;
      }

      if(newNumber > this.pageNumber) {
        newNumber = this.pageNumber;
      }

      this.$emit("pageChange", newNumber)
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 25px 0;

  a {
    color: @primary;
    margin: 0 5px;

    &:hover {
      cursor: pointer;
    }
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }

    &.active {
      color: @words;
      cursor: text;
      font-weight: bold;
    }

  }
}
</style>