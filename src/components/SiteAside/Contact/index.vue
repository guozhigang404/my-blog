<template>
  <ul class="contact-container">
    <li>
      <a href="#">
        <div class="icon">
          <Icon type="github"></Icon>
        </div>
        <span>{{ data.githubName }}</span>
      </a>
    </li>

    <li>
      <a :href="`mailto:${data.mail}`">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>{{ data.mail }}</span>
      </a>
    </li>

    <li>
      <a
                :href="
          `tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`
        "
      >
        <div class="icon">
          <Icon type="qq"></Icon>
        </div>
        <span>{{ data.qq }}</span>
      </a>
      <div class="pop">
        <img
          :src="data.qqQrCode"
          alt=""
        />
      </div>
    </li>

    <li>
      <a>
        <div class="icon weixin">
          <Icon type="weixin" />
        </div>
        <span>{{ data.weixin }}</span>
      </a>
      <div class="pop">
        <img
          :src="data.weixinQrCode"
        />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
import "@/styles/global.less";
import {mapState} from "vuex"

export default {
  name: "Contact",
  components: {
    Icon,
  },
  computed: {
    ...mapState("setting", ["loading", "data"])
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

@itemHeight: 30px;

.contact-container {
  width: 100%;
  background-color: transparent;
  color: @gray;
  margin: 0;
  padding: 10px 15px;
  box-sizing: border-box;

  li {
    height: @itemHeight;
    line-height: @itemHeight;
    list-style: none;
    margin: 5px 0;
    position: relative;

    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }

    .pop {
      position: absolute;
      left: 0;
      bottom: @itemHeight + 5px;
      padding: 20px;
      background-color: #fff;
      border-radius: 5px;
      font-size: 0;
      line-height: 0;

      transform: scaleY(0);
      transition: all 0.3s;
      transform-origin: center bottom;
      img {
        width: 120px;
        height: 120px;
      }

      &::after {
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%) rotateZ(45deg);
        background-color: #fff;
        bottom: -4px;
      }
    }
  }

  a {
    display: flex;
    align-items: center;

    span {
      font-size: 13px;
    }
  }

  .icon {
    margin-right: 8px;
    font-size: 18px;
  }
}
</style>