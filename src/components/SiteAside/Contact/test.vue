<template>
  <div class="test">
    <Contact></Contact>
  </div>
</template>

<script>
import Contact from "./index"
export default {
  name: "test",
  components: {
    Contact
  }
}
</script>

<style lang="less" scoped>
.test {
  width: 300px;
  height: 600px;
  border: 2px solid red;
  background: #000;
  color: #fff;

  padding-top: 200px;
}
</style>