<template>
  <div class="detail-container" ref="mainContainer" >
    <h1>{{blog.title}}</h1>
    <div class="aside">
      <span>日期: {{ formatDate(blog.createDate) }}</span>
      <span>浏览: {{ blog.scanNumber }}</span>
      <a href="#dataForm">评论: {{ blog.commentNumber }}</a>
      <!--<a href="">{{ blog.category["name"] }}</a>-->
    </div>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import formatDate from "@/utils/formatDate"
import "@/styles/markdown.css";
import "highlight.js/styles/github.css";
export default {
  name: "Detail",
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate,

  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.detail-container {
  //width: 100%;
  //height: 100%;
  //overflow-y: auto;
  //overflow-x: hidden;
  //scroll-behavior: smooth;
}
.aside {
  font-size: 12px;
  color: @gray;
  span,
  a {
    margin-right: 15px;
  }
}
</style>