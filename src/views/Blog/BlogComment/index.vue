<template>
  <div class="blog-comment-container">
    <MessageArea
        @submit="handleSubmit"
        title="评论列表"
        :subTitle="`(${data.total})`"
        :list="data.rows"
        :isListLoading="isLoading"
    ></MessageArea>
  </div>
</template>

<script>
import {postComment, getComments} from '@/api/blog'
import MessageArea from '@/components/MessageArea'
import fetchData from '@/mixins/fetchData';
import eventBus from '@/utils/eventBus'

export default {
  name: "BlogComment",
  mixins: [fetchData([])],
  components: {
    MessageArea
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    },
  },
  methods: {
    async fetchData() {
      try {
        return await getComments(this.$route.params.blogId)
      } catch (ex) {
      }
    },
    handleSubmit(formData, callback) {
      postComment({
        blogId: this.$route.params.blogId,
        ...formData
      }).then(result => {
        this.data.rows.shift(result);
        this.data.total ++;
        callback("谢谢你八辈祖宗");
      })
    },
    handleScroll(dom) {
      if (this.isLoading || !dom) {
        // 目前正在加载更多
        return;
      }
      const range = 100; // 顶一个可接受的范围，在这个范围内都算达到了底部
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if (dec <= range) {
        this.fetchMore();
      }
    },
    async fetchMore() {
      if (!this.hasMore) {
        // 没有更多啦
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    }
  },
  created() {
    eventBus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    eventBus.$off("mainScroll", this.handleScroll)
  }
}
</script>

<style lang="less" scoped>

</style>
