<template>
  <div class="blog-toc-container" ref="blogTocContainer">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @select="handleSelect"/>
  </div>
</template>

<script>
import RightList from "./../RightList";
import eventBus from '@/utils/eventBus'
import debounce from '@/utils/debounce'

export default {
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
    },
  },
  data() {
    return {
      activeAnchor: ""
    }
  },
  computed: {
    tocWithSelect() {
      const getTOC = (toc = []) => {
        return toc.map((item) => {
          return {
            ...item,
            isSelect: item.anchor === this.activeAnchor,
            children: getTOC(item.children)
          }
        })
      }
      return getTOC(this.toc)
    },
    doms() {
      const domArr = [];
      const addDom = (toc) => {
        for (let item of toc) {
          domArr.push(document.getElementById(item.anchor));
          if(item.children && item.children.length) {
            addDom(item.children);
          }
        }
      }
      addDom(this.toc)
      return domArr;
    }
  },
  created() {
    this.setSelectDebouce = debounce(this.setSelect)
    eventBus.$on("mainScroll", this.setSelectDebouce);
  },
  destroyed() {
    eventBus.$off("mainScroll", this.setSelectDebouce);
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    setSelect(dom) {
      if(!dom) {
        return null;
      }
      const range = 120;
      this.activeAnchor = "";
      for (const dom of this.doms) {
        const top = dom.getBoundingClientRect().top;
        if(top >= 0 && top <= range) {
          // 在范围内，激活
          this.activeAnchor = dom.id;
        } else if(top > range) {
          // 在激活区域下面
          return null;
        } else {
          // 在激活区域上面
          this.activeAnchor = dom.id;
        }
      }
    }
  },
};
</script>

<style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
