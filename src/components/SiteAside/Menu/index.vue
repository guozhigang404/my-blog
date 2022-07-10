<template>
  <nav class="menu-container">
    <router-link
        v-for="item in items"
        :key="item.link"
        :to="{
          name: item.name
        }"
        :exact="item.exact"
        active-class="selected"
        exact-active-class=""
    >
      <div class="icon">
        <Icon :type="item.icon"></Icon>
      </div>
      <span>{{ item.title }}</span>
    </router-link>
  </nav>
</template>

<script>
import Icon from "@/components/Icon"

export default {
  name: "Menu",
  data() {
    return {
      items: [
        {
          link: "/",
          title: "首页",
          icon: "home",
          name: "Home",
          exact: true
        },
        {
          link: "/blog",
          title: "文章",
          icon: "blog",
          name: "Blog",
          exact: false,
        },
        {
          link: "/about",
          title: "关于我",
          icon: "about",
          exact: true,
          name: "About"
        },
        {
          link: "/project",
          title: "项目&效果",
          icon: "code",
          exact: true,
          name: "Project"
        },
        {
          link: "/message",
          title: "留言板",
          icon: "chat",
          exact: true,
          name: "Message"
        },
      ]
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.menu-container {
  padding: 10px 0;
  box-sizing: border-box;
  color: #FFFFFF;

  a {
    display: flex;
    align-items: center;
    padding: 10px 0 10px 25px;
    transition: all 0.2s;

    .icon {
      font-size: 18px;
      margin-right: 7px;
    }

    span {
      font-size: 14px;
    }

    &.selected {
      background-color: darken(@words, 2%);
    }

    &:hover {
      background-color: darken(@words, 5%);
    }
  }
}
</style>