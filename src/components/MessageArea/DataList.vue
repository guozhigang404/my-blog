<template>
  <ul class="data-list-container">
    <li v-for="item in list" :key="item.id">
      <div class="avatar">
        <Avatar
            :size="45"
            :url="item.avatar"
        ></Avatar>
      </div>
      <div class="data-area">
        <div class="time">{{formatDate(item.createDate, true)}}</div>
        <div class="nickname">{{item.nickname}}</div>
        <div class="content">{{item.content}}</div>
      </div>
    </li>
  </ul>
</template>

<script>
import Avatar from '@/components/Avatar';
import formatDate from "@/utils/formatDate"
export default {
  name: "DataList",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  components: {
    Avatar
  },
  methods: {
    formatDate
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.data-list-container {
  padding: 10px 10px 10px 20px;
  box-sizing: border-box;

  li {
    margin: 0 0 15px;
    list-style: none;
    display: flex;
    .avatar {
      flex: 0 0 45px;
      margin-right: 10px;
    }
    .data-area {
      flex: 1 1 auto;
      position: relative;
      .time {
        position: absolute;
        font-size: 12px;
        right: 5px;
        top: 3px;
      }
      .nickname {
        color: @success;
        margin-bottom: 8px;
        font-size: 16px;
      }
      .content {
        font-size: 14px;
      }

    }
  }
}
</style>