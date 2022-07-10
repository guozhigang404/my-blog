<template>
  <div class="blog-category-container">
    <h2>文章分类</h2>
    <RightList
        :list="list"
        @select="handleSelect"
    ></RightList>
  </div>
</template>

<script>
import RightList from '@/views/Blog/RightList';
import fetchData from '@/mixins/fetchData';
import {getBlogTypes} from '@/api/blog'

export default {
  name: "BlogCategory",
  mixins: [fetchData([])],
  data() {
    return {}
  },
  components: {
    RightList
  },
  computed: {
    categoryId() {
      return +(this.$route.params.categoryid) || -1;
    },
    limit() {
      return +(this.$route.query.limit) || 10
    },
    list() {
      let totalArticleCount = 0;
      for (let i = 0; i < this.data.length; i++) {
        totalArticleCount += this.data[i].articleCount;
      }
      const result = [
        {name: "全部", id: -1, articleCount: totalArticleCount},
        ...this.data,
      ];

      return result.map(item => {
        return {
          ...item,
          isSelect: item.id === this.categoryId,
          aside: `${item.articleCount}篇`
        }
      });
    }
  },
  methods: {
    async fetchData() {
      return await getBlogTypes();
    },
    handleSelect(item) {
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query: {
            page: 1,
            limit: this.limit
          }
        })
      } else {
        // 有分类
        this.$router.push({
          name: "CategoryBlog",
          query: {
            page: 1,
            limit: this.limit
          },
          params: {
            categoryid: item.id
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.blog-category-container {
  width: 250px;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  overflow-y: auto;
  h2 {
    margin: 10px 0;
    padding: 0;
    font-size: 1em;
    text-indent: 2em;
  }
}
</style>