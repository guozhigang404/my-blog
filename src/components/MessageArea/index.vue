<template>
  <div class="message-area-container" id="dataForm">
    <DataForm v-on="$listeners"></DataForm>
    <h3>{{title}} <span>{{subTitle}}</span> </h3>
    <DataList :list="list"></DataList>
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from './DataForm'
import DataList from "./DataList";
export default {
  name: "MessageArea",
  props: {
    title: {
      type: String,
      default: "评论列表"
    },
    subTitle: {
      type: String,
      default: "1233"
    },
    list: {
      type: Array,
      default: () => []
    },
    isListLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  },
  components: {
    DataForm,
    DataList
  }
}
</script>

<style lang="less" scoped>
h3{
  margin: 10px 0;
  padding-left: 20px;
  box-sizing: border-box;
  span {
    font-weight: normal;
  }
}

.loading {
  position: relative;
  height: 100px;
}
</style>
