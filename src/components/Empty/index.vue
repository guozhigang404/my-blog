<template>
  <div class="empty-container">
    <Icon type="empty"></Icon>
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  name: "Empty",
  components: {
    Icon
  },
  props: {
    text: {
      type: String,
      default: "无数据"
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/common.less";
@import "~@/styles/var.less";

.empty-container {
  .self-center();
  color: @gray;
  text-align: center;

  p {
    margin: 10px 0;
    font-size: 14px;
  }
}

.icon-container {
  font-size: 60px;
}
</style>