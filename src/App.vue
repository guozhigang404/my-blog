<template>
  <div id="app">
    <Layout>
      <template #left>
        <div class="left">
          <SiteAside></SiteAside>
        </div>
      </template>
      <template #default>
        <div class="main">
          <RouterView></RouterView>
        </div>
      </template>
    </Layout>
    <ToTop></ToTop>
  </div>
</template>

<script>
import Layout from '@/components/Layout'
import SiteAside from '@/components/SiteAside'
import ToTop from '@/components/ToTop'

export default {
  name: 'App',
  components: {
    Layout,
    SiteAside,
    ToTop
  }
}
</script>

<style scoped lang="less">
#app {
  width: 100%;
  height: 100%;
}

.left {
  width: 210px;
  height: 100%;
}
</style>
