<template>
  <div class="docker">
    <div v-for="item in dockerList"
         :class="{'docker__item': true, 'docker__item--active': index === 0}"
         :key="item.icon"
         class="docker__item docker__item--active">
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__item__title">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe601;', text: '首页' },
      { icon: '&#xe645;', text: '购物车' },
      { icon: '&#xe600;', text: '订单' },
      { icon: '&#xe602;', text: '我的' }
    ]
    return { dockerList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import "../../style/mixins.scss";
.docker{
  display:flex;
  color: $content-fontcolor;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  //background-color: red;
  // 修改盒子宽高计算方式
  box-sizing: border-box;
  // 左右内容区边距是18像素
  padding: 0 0.18rem;
  &__item{
    flex: 1;
    // 文字居中
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size:0.18rem;
    }
    &--active {
      color: #1FA4FC;
    }
  }
  &__item__title {
    // 让文字变成10像素，浏览器默认最小显示的是12px，所以要缩短
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
