<template>
  <div class="test-container">
    <Pager
      :current="current"
      :total="102"
      :limit="10"
      :visibleNumber="10"

      @pageChange="change"
    ></Pager>
  </div>
</template>

<script>
import "@/styles/global.less"
import Pager from "./"
export default {
  name: "test",
  data() {
    return {
      current: 1
    }
  },
  components: {
    Pager
  },
  methods: {
    change(newPage) {
      this.current = newPage
    }
  }
}
</script>

<style lang="less" scoped>

</style>