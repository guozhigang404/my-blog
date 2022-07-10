<template>
  <div class="test">
    <RightList @select="handleSelect" :list="list"></RightList>
  </div>
</template>

<script>
import RightList from './'

export default {
  name: "test",
  data() {
    return {
      list: [
        {name: "a", isSelect: false},
        {name: "b", isSelect: false},
        {
          name: "c", isSelect: true,
          children: [
            {name: "c-1", isSelect: false},
            {
              name: "c-2", isSelect: true,
              children: [
                {name: "c-2-1", isSelect: false},
                {name: "c-2-2", isSelect: true},
                {name: "c-2-3", isSelect: false}
              ]
            },
            {name: "c-3", isSelect: false},
          ]
        },
        {name: "d", isSelect: false},
      ]
    }
  },
  components: {
    RightList
  },
  methods: {
    handleSelect(item) {
      console.log(item)
    }
  }
}
</script>

<style lang="less" scoped>

</style>