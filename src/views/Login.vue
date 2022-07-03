<template>
  <div>
    <el-form
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      :rules="rules"
      :model="loginForm"
      class="loginContainer"
      ref="loginForm"
    >
      <h3 class="loginTitle">系统登陆</h3>
      <el-form-item label="用户名" prop="username">
        <el-input
          type="text"
          v-model="loginForm.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input
          style="width: 250px; margin-right: 5px"
          type="text"
          v-model="loginForm.code"
          placeholder="点击更换验证码"
        >
        </el-input>
        <img :src="captchaUrl" @click="updateCaptcha" />
      </el-form-item>
      <el-checkbox class="loginRemember" v-model="checked">记住我</el-checkbox>
      <el-button type="primary" style="width: 100%" @click="submitLogin"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "admin", //用户名
        password: "123", //密码
        code: "", //验证码
      },
      loading: false, //是否登陆中
      captchaUrl: "/captcha?time=" + new Date(), //验证码url
      checked: true, //记住我
      rules: {
        username: [{ required: true, message: "请输入", trigger: "blur" }],
        password: [{ required: true, message: "请输入", trigger: "blur" }],
        code: [{ required: true, message: "请输入", trigger: "blur" }],
      },
    };
  },
  methods: {
    updateCaptcha() {
      //更新验证码
      this.captchaUrl = "/captcha?time=" + new Date();
    },
    submitLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.postRequest("/login", this.loginForm).then((resp) => {
            this.loading = false;
            if (resp) {
              //存储token
              const tokenStr = resp.obj.tokenHead + resp.obj.token;
              window.sessionStorage.setItem("tokenStr", tokenStr);
              this.$router.replace("/home");
            }
          });
        } else {
          this.$message.error("请输入所有字段");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.loginContainer {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 15px 35px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.loginTitle {
  margin: 0px auto 40px auto;
  text-align: center;
}
.loginRemember {
  text-align: left;
  margin: 0px 0px 15px 0px;
}
.el-form-item__content {
  display: flex;
  align-items: center;
}
</style>