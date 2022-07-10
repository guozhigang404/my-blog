<template>
  <div class="blog-detail-container"  v-loading="isLoading">
    <Layout>
      <template #default>
        <div class="blog-main" ref="mainContainer" >
          <Detail  v-if="data" :blog="data"></Detail>
          <BlogComment v-if="!isLoading"></BlogComment>
        </div>
      </template>
      <template #right>
        <div class="blog-right">
          <BlogTOC :toc="data.toc" v-if="data"></BlogTOC>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData'
import {getBlog} from '@/api/blog'
import Layout from '@/components/Layout';
import Detail from './Detail'
import BlogTOC from "./BlogTOC"
import BlogComment from '@/views/Blog/BlogComment'
import mainScroll from '@/mixins/mainScroll'
import TitleControl from '@/utils/TitleControl';
export default {
  name: "BlogDetail",
  mixins: [fetchData(null), mainScroll("mainContainer")],
  components: {
    Layout,
    Detail,
    BlogTOC,
    BlogComment
  },
  methods: {
    async fetchData() {
      const resp = await getBlog(this.$route.params.blogId);
      TitleControl.setRouterTitle(resp.title)
      return resp;
    },
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 10)
  }
}
</script>

<style scoped lang="less">
.blog-detail-container {
  width: 100%;
  height: 100%;

  .blog-main {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  .blog-right {
    width: 260px;
    height: 100%;
  }
}
</style>
