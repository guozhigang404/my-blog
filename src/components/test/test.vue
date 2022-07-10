<template>
  <div class="test-container">
    <img src="https://img2.baidu.com/it/u=790045287,958560532&fm=26&fmt=auto" alt="">
    <img src="https://img2.baidu.com/it/u=790045287,958560532&fm=26&fmt=auto" alt="">
    <img src="https://img2.baidu.com/it/u=790045287,958560532&fm=26&fmt=auto" alt="">
    <img src="https://img2.baidu.com/it/u=790045287,958560532&fm=26&fmt=auto" alt="">
    <img src="https://img2.baidu.com/it/u=790045287,958560532&fm=26&fmt=auto" alt="">
    <img src="https://img2.baidu.com/it/u=790045287,958560532&fm=26&fmt=auto" alt="">
  </div>
</template>

<script>
import getComponentRootDom from '@/utils/ComponentRootDom'
export default {
  name: "test",
  data() {
    return {

    };
  },
  methods: {
    fun() {
      getComponentRootDom()
    }
  }
};
</script>



<style lang="less" scoped>
img {
  width: 200px;
}

</style>