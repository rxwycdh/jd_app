<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png">
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入用户名"/>
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content" type="password" placeholder="请输入密码"/>
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content" type="password" placeholder="确认密码"/>
    </div>
    <div class="wrapper__register-button">注册</div>
    <div class="wrapper__register-link" @click="handleLoginClick">已有账号，立即登录</div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Login',
  setup () {
    const router = useRouter()
    const handleLoginClick = () => {
      router.push({ name: 'Login' })
    }
    return { handleLoginClick }
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

  &__register-button{
    line-height: .48rem;
    text-align: center;
    font-size: .16rem;
    margin: .32rem .4rem .16rem .4rem;
    background: #0091FF;
    box-shadow: 0 .04px .08rem rgba(0, 145, 255, 0.32);
    border-radius: .04rem;
    color: white;
  }

  &__register-link {
    color: $content-notice-fontcolor;
    text-align: center;
  }

}
</style>
