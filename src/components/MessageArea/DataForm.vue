<template>
  <div class="data-form" ref="dataForm">
    <form @submit.prevent="handleSubmit">
      <div class="form-item">
        <div class="input-area">
          <input
              type="text"
              placeholder="昵称"
              maxlength="40"
              v-model="formData.nickName"
          >
          <span class="tip">{{ formData.nickName.length }} / 40</span>
        </div>
        <div class="error">{{ errorData.nickName }}</div>
      </div>

      <div class="form-item">
        <div class="text-area">
          <textarea
              placeholder="请输入内容"
              maxlength="300"
              v-model="formData.content"
          ></textarea>
          <span class="tip">{{ formData.content.length }} / 300</span>
        </div>
        <div class="error">{{ errorData.content }}</div>
      </div>
      <div class="form-item">
        <button
            class="submit-btn"
            :disabled="isSubmit"
        >{{isSubmit ? "提交中..." : "提交"}}</button>
      </div>
    </form>
  </div>
</template>

<script>
import messageBox from '@/utils/MessageBox'
export default {
  name: "DataForm",
  data() {
    return {
      formData: {
        nickName: "",
        content: ""
      },
      errorData: {
        nickName: "",
        content: ""
      },
      isSubmit: false
    }
  },
  methods: {
    handleSubmit() {
      // 验证数据
      this.errorData.nickName = this.formData.nickName ? "" : "请填写昵称";
      this.errorData.content = this.formData.content ? "" : "请填写内容";
      if (this.errorData.nickName && this.errorData.content) {
        return null;
      }
      this.isSubmit = true;
      this.$emit("submit", this.formData, (successMsg) => {
        messageBox(
            successMsg,
            "success",
            1500,
            this.$refs.dataForm,
            () => {
              this.formData.content = "";
              this.formData.nickName = "";
              this.isSubmit = false;
            }
        )
      });
    }
  }
}
</script>

<style scoped lang="less">
.data-form {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  form {
    width: 100%;
    border-top: 2px solid #6B9EEE;
    border-bottom: 2px solid #6B9EEE;

    .form-item {
      //margin-bottom: 15px;
      padding: 9px;
      box-sizing: border-box;

      .error {
        margin: 5px 0;
        height: 26px;
        line-height: 26px;
        color: #FF2200;
        font-size: 13px;
        padding-left: 20px;
      }
    }

    .input-area {
      width: 60%;
      position: relative;

      input {
        width: 100%;
        height: 36px;
        outline: none;
        border: 1px dashed #6B9EEE;
        border-radius: 12px;
        padding: 0 15px;
        box-sizing: border-box;
      }
    }

    .text-area {
      width: 90%;
      position: relative;

      textarea {
        width: 100%;
        height: 150px;
        padding: 15px;
        box-sizing: border-box;
        border-radius: 15px;
        outline: none;
        resize: none;
        border: 1px dashed #6B9EEE;
      }
    }

    .tip {
      position: absolute;
      right: 10px;
      bottom: 5px;
      font-size: 12px;
      color: #6A737D;
    }

    .submit-btn {
      width: 100px;
      height: 30px;
      outline: none;
      border: none;
      background-color: #6B9EEE;
      border-radius: 5px;
      color: #FFF;
      cursor: pointer;
    }
  }
}
</style>