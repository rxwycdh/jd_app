<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe60e;</span>
    北京理工大学国防科技园2号楼10层
    <span class="iconfont position__notice">&#xe8e5;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe61e;</span>
    <!--      iconfont设置了inline-block，
    使得文字不是垂直居中（会有一点影响）所以这里再包一个span-->
    <span class="search__text">山姆会员商店优惠商品</span>
  </div>
  <div class="banner">
    <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" />
  </div>
  <div class="icons">
    <div class="icons__item"
         v-for="(item,index) in iconsList"
         :key="index" >
      <img class="icons__item__img" :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"/>
      <p class="icons__item__desc">{{item.desc}}</p>
    </div>

  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconsList = [
      { imgName: '超市', desc: '超市便利' },
      { imgName: '菜市场', desc: '菜市场' },
      { imgName: '水果店', desc: '水果店' },
      { imgName: '鲜花', desc: '鲜花绿植' },
      { imgName: '医药健康', desc: '医药健康' },
      { imgName: '家居', desc: '家居时尚' },
      { imgName: '蛋糕', desc: '烘焙蛋糕' },
      { imgName: '签到', desc: '签到' },
      { imgName: '大牌免运', desc: '大牌免运' },
      { imgName: '红包', desc: '红包套餐' }
    ]
    return { iconsList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import "../../style/mixins.scss";
.position{
  color: $content-fontcolor;
  position: relative;
  // 防止文字省略号去到铃铛icon处 增加右外边距
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  .position__icon {
    position:relative;
    // 微调icon偏上 开启relative定位 + 调整（定位原点就是icon在文档流的位置）
    top: 0.01rem;
    font-size: 0.2rem;
  }
  .position__notice {
    position: absolute;
    right:0;
    top: 0.17rem;
    font-size: 0.2rem;
  }
}
// 搜索框
.search {
  line-height: 0.32rem;
  background-color: $search-bgColor;
  color: $search-fontColor;
  border-radius: 0.16rem;

  margin-bottom: .12rem;
  .iconfont {
    position: relative;
    top: .02rem;
    font-size: .2rem;
    // 设置行内块元素 就可以调整padding
    display: inline-block;
    padding: 0 .08rem 0 .16rem;
  }
  &__text {
    display: inline-block;
    font-size: .12rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img{
    width: 100%;
  }
}

.icons{
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: .06rem 0 .16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
// 分割线
.gap{
  margin:0 -.18rem;
  height: .1rem;
  background: $content-bgColor;
}
</style>
