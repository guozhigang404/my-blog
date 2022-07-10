<template>
  <ul class="right-list-container">
    <li
        v-for="(item, i) in list"
        :key="i"
    >
      <span
        :class="{
        active: item.isSelect
      }"
        @click="handleClick(item)"
    >{{ item.name }}</span>
      <span
          class="aside"
          :class="{
          active: item.isSelect
        }"
          @click="handleClick(item)"
      >{{ item.aside }}</span>
      <RightList @select="handleClick" :list="item.children ? item.children : []"></RightList>
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClick(item) {
      if (!item.isSelect) {
        this.$emit("select", item);
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.right-list-container {
  padding: 0;
  margin: 0;
  list-style: none;

  .right-list-container {
    margin-left: 1em;
  }

  li {
    min-height: 36px;
    line-height: 36px;
    cursor: pointer;

    span {
      margin: 0 4px;
    }

    span:hover {
      color: @primary;
    }

    .active {
      color: @warn;
      font-weight: bold;
    }
  }
}
</style>