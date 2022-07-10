<template>
  <div class="site-aside-container">
    <template
      v-if="data"
    >
      <Avatar
        :size="150"
        :url="data.avatar"
      ></Avatar>
      <h1>{{data.siteTitle}}</h1>
    </template>
    <Menu></Menu>
    <Contact
      v-if="data"
    ></Contact>
    <p v-if="data">{{data.icp}}</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Contact from "@/components/SiteAside/Contact";
import Menu from "@/components/SiteAside/Menu";
import { mapState } from "vuex";

export default {
  name: "SiteAside",
  components: {
    Avatar,
    Menu,
    Contact,
  },
  computed: {
    ...mapState("setting", ["loading", "data"]),
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.avatar-container {
  margin: 0 auto;
}

.site-aside-container {
  padding-top: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: @dark;
  overflow-x: hidden;
  overflow-y: auto;

  h1 {
    margin: 10px 0;
    text-align: center;
    font-size: 18px;
    color: #ffffff;
    font-weight: normal;
  }
  p {
    margin: 10px 0;
    text-align: center;
    color: @gray;
    font-size: 12px;
  }
}
</style>