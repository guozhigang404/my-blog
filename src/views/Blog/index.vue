<template>
  <div class="blog-container">
    <Layout>
      <template #default>
        <BlogList></BlogList>
      </template>
      <template #right>
        <BlogCategory></BlogCategory>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout'
import BlogList from '@/views/Blog/BlogList'
import BlogCategory from '@/views/Blog/BlogCategory'
export default {
  name: "Blog",
  data() {
    return {
    }
  },
  components: {
    Layout,
    BlogList,
    BlogCategory
  }
}
</script>

<style lang="less" scoped>
.blog-container {
  width: 100%;
  height: 100%;
}
</style>