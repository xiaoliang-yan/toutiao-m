<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar
    class="app-nar-bar"
    title="注册/登录"
    left-arrow
    @click-left="$router.back()" />
    <!-- /导航栏 -->
    <!-- 登录表单 -->
    <!-- 基于vant的表单验证：
      1、使用vant-form组件包裹所有的表单项
      2、给vant-form绑定submit事件
      当表单提交的时候触发submit事件
      提示：只有表单验证通过，他才会调用submit
      3、使用 Field 的rules属性定义校验规则
     -->
    <van-form @submit="onLogin">
      <van-field
      v-model="user.mobile"
      icon-prefix="toutiao"
      left-icon="shouji"
      placeholder="请输入手机号"
      :rules="formRules.mobile"
      />
      <van-field
      v-model="user.code"
      clearable
      icon-prefix="toutiao"
      left-icon="yanzhengma"
      placeholder="请输入验证码"
      :rules="formRules.code">
      <template #button>
          <van-button
          class="sead-btn"
          size="small"
          round>发送验证码
          </van-button>
       </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button
          class="login-btn"
          type="info"
          block
          >登录</van-button>
      </div>
    </van-form>
    <!-- /登录表单 -->
  </div>
</template>

<script>
import { login } from '@/api/user'
// import { Toast } from 'vant'

export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: '' // 验证码
      },
      formRules: {
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '手机号登录错误' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '验证码输入错误' }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mouthed () {},
  methods: {
    async onLogin () {
      // Toast.loading({
      this.$toast.loading({
        message: '加载中...', // 提示文本
        forbidClick: true, // 禁止背景点击
        duration: 0 // 展示时长(ms)，值为 0 时，toast 不会消失
      })
      // 1找到数据接口
      // 2封装请求接口
      // 3请求调用登录
      try {
        const res = await login(this.user)
        // 4处理响应结果
        console.log(res)
        this.$toast.success('登录成功')
      } catch (e) {
        console.log(e)
        this.$toast.fail('登录失败，手机或验证码填写错误')
      }
    }
  }
}
</script>

<style scoped lang="less">
.login-container{
  .sead-btn{
    width: 76px;
    height: 23px;
    background-color:#ededed;
    .van-button__text{
      font-size: 11px;
      color: #666;
    }
  }
  .login-btn-wrap{
      padding: 26px 16px;
      .login-btn{
        background-color: #6db4fb;
        border: none;
        .van-button__text{
          font-size: 15px;
        }
      }
   }
}
</style>
