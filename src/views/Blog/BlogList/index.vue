<template>
  <div class="blog-list-container"  v-loading="isLoading"  ref="blogListContainer">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <a href="">
            <img
                v-lazy="item.thumb"
                :src="item.thumb"
                :alt="item.title"
                :title="item.title"
            />
          </a>
        </div>
        <div class="main">
          <RouterLink :to="{
            name: 'BlogDetail',
            params: {
              blogId: item.id
            }
          }">
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论 {{ item.commenttNumber }}</span>
            <RouterLink :to="{
              name: 'CategoryBlog',
              params: {
                categoryid: item.category.id
              }
            }">{{ item.category.name }}</RouterLink>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <Empty v-if="data.rows.length === 0 && !isLoading" />
    <Pager
      v-if="data.total"
      :current="routeInfo.page"
      :total="data.total"
      :limit="routeInfo.limit"
      @pageChange="handlePageChange"
    ></Pager>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData'
import {getBlogs} from '@/api/blog'
import formatDate from "@/utils/formatDate"
import Pager from '@/components/Pager'
import mainScroll from '@/mixins/mainScroll'
import Empty from "@/components/Empty";
export default {
  name: "BlogList",
  mixins: [fetchData({ total: 0, rows: [] }), mainScroll("blogListContainer")],
  data() {
    return {}
  },
  components: {
    Pager,
    Empty
  },
  computed: {
    routeInfo() {
      const categoryId = +(this.$route.params.categoryid) || -1;
      const page = +(this.$route.query.page) || 1;
      const limit = +(this.$route.query.limit) || 10;
      return {
        categoryId,
        page,
        limit
      }
    }
  },
  methods: {
    formatDate,
    async fetchData() {
      return await getBlogs(this.routeInfo.page, this.routeInfo.limit, this.routeInfo.categoryId)
    },
    handlePageChange(newPage) {
      if(this.routeInfo.categoryId === -1) {
        // 没有分类
        this.$router.push({
          name: "Blog",
          query: {
            page: newPage,
            limit: this.routeInfo.limit
          }
        })
      } else {
        // 有分类
        this.$router.push({
          name: "CategoryBlog",
          query: {
            page: newPage,
            limit: this.routeInfo.limit
          },
          params: {
            categoryid: this.routeInfo.categoryId
          }
        })
      }
    },
  },
  watch: {
    $route() {
      this.isLoading = true;
      this.$refs.blogListContainer.scrollTop = 0;
      this.fetchData().then((result) => {
        this.data = result;
        this.isLoading = false;
      })
    }
  },
}

</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}

li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;

  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;

    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }

  .main {
    flex: 1 1 auto;

    h2 {
      margin: 0;
    }
  }

  .aside {
    font-size: 12px;
    color: @gray;

    span {
      margin-right: 15px;
    }
  }

  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
