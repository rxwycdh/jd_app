<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png">
    <div class="wrapper__input">
      <input class="wrapper__input__content" v-model="data.username" placeholder="请输入用户名"/>
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content" v-model="data.password" type="password" placeholder="请输入密码"/>
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登录</div>
    <div class="wrapper__login__tags">
      <div class="wrapper__login__tags-link" @click="handleRegisterClick">立即注册</div>
      <div class="wrapper__login__tags__gap"></div>
      <div class="wrapper__login__tags-forget">忘记密码</div>
    </div>
    <Toast v-if="data.showToast" :message="data.toastMessage"/>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { post } from '../../utils/request'
import Toast from '../../components/Toast'

export default {
  name: 'Login',
  components: { Toast },
  setup () {
    const data = reactive({
      username: '',
      password: '',
      showToast: false,
      toastMessage: ''
    })
    const router = useRouter()

    const showToast = (message) => {
      data.showToast = true
      data.toastMessage = message
      setTimeout(() => {
        data.showToast = false
        data.toastMessage = ''
      }, 2000)
    }
    const handleLogin = async () => {
      try {
        // await 获取的是Promise里面的resolve或者reject的值
        const result = await post('/api/user/login', {
          username: data.username,
          password: data.password
        })

        if (result?.errno === 0) {
          localStorage.isLogin = true
          await router.push({ name: 'Home' })
        } else {
          showToast('登录失败')
        }
      } catch (e) {
        showToast('请求失败')
      }
    }
    const handleRegisterClick = () => {
      router.push({ name: 'Register' })
    }
    return {
      data,
      handleLogin,
      handleRegisterClick
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';

.wrapper {
  // 通过绝对定位垂直居中
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);

  &__img {
    display: block;
    width: .66rem;
    height: .66rem;
    margin: 0 auto .4rem auto;
  }

  &__input {
    background: #F9F9F9;
    // 设置了padding 如果不设置成border-box则盒子会变大
    box-sizing: border-box;
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: .06rem;
    padding: 0 .16rem;

    &__content {
      // 输入框宽高覆盖父容器
      line-height: .48rem;
      width: 100%;
      border: none;
      outline: none;
      background: none;
      font-size: .14rem;
      color: $content-notice-fontcolor;

      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }

  &__login-button {
    line-height: .48rem;
    text-align: center;
    font-size: .16rem;
    margin: .32rem .4rem 0 .4rem;
    background: #0091FF;
    box-shadow: 0 .04px .08rem rgba(0, 145, 255, 0.32);
    border-radius: .04rem;
    color: white;
  }

  &__login__tags {
    display: flex;
    color: $content-notice-fontcolor;
    font-size: .14rem;
    justify-content: space-evenly;
    width: 50%;
    margin: .16rem auto 0 auto;

    &__gap {
      border-left: .01rem solid $content-notice-fontcolor;
    }

  }

}
</style>
