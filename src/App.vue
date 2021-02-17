<template>
  <div class="wrapper">
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
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png"/>
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/菜市场.png"/>
        <p class="icons__item__desc">菜市场</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/水果店.png"/>
        <p class="icons__item__desc">水果店</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/鲜花.png"/>
        <p class="icons__item__desc">鲜花绿植</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/医药健康.png"/>
        <p class="icons__item__desc">医药健康</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/家居.png"/>
        <p class="icons__item__desc">家居时尚</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/蛋糕.png"/>
        <p class="icons__item__desc">烘焙蛋糕</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/签到.png"/>
        <p class="icons__item__desc">签到</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/大牌免运.png"/>
        <p class="icons__item__desc">大牌免运</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/红包.png"/>
        <p class="icons__item__desc">红包套餐</p>
      </div>
    </div>
    <div class="gap"></div>
    <div class="nearby">
      <h3 class="nearby__title">附近店铺</h3>
      <div class="nearby__item">
        <img class="nearby__item__img"
             src="http://www.dell-lee.com/imgs/vue3/near.png" />
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">起送￥0</span>
            <span class="nearby__content__tag">基础运费￥5</span>
          </div>
          <p class="nearby__content__highlight">VIP尊享满89元减4元运费券（每周3张）</p>
        </div>
      </div>
      <div class="nearby__item">
        <img class="nearby__item__img"
             src="http://www.dell-lee.com/imgs/vue3/near.png" />
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">起送￥0</span>
            <span class="nearby__content__tag">基础运费￥5</span>
          </div>
          <p class="nearby__content__highlight">VIP尊享满89元减4元运费券（每周3张）</p>
        </div>
      </div>
      <div class="nearby__item">
        <img class="nearby__item__img"
             src="http://www.dell-lee.com/imgs/vue3/near.png" />
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">起送￥0</span>
            <span class="nearby__content__tag">基础运费￥5</span>
          </div>
          <p class="nearby__content__highlight">VIP尊享满89元减4元运费券（每周3张）</p>
        </div>
      </div>
      <div class="nearby__item">
        <img class="nearby__item__img"
             src="http://www.dell-lee.com/imgs/vue3/near.png" />
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">起送￥0</span>
            <span class="nearby__content__tag">基础运费￥5</span>
          </div>
          <p class="nearby__content__highlight">VIP尊享满89元减4元运费券（每周3张）</p>
        </div>
      </div>
      <div class="nearby__item">
        <img class="nearby__item__img"
             src="http://www.dell-lee.com/imgs/vue3/near.png" />
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">起送￥0</span>
            <span class="nearby__content__tag">基础运费￥5</span>
          </div>
          <p class="nearby__content__highlight">VIP尊享满89元减4元运费券（每周3张）</p>
        </div>
      </div>
    </div>
  </div>

  <div class="docker">
    <span class="docker__item docker__item--active">
      <div class="iconfont">&#xe601;</div>
      <div class="docker__item__title">首页</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe645;</div>
      <div class="docker__item__title">购物车</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe600;</div>
      <div class="docker__item__title">订单</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe602;</div>
      <div class="docker__item__title">我的</div>
    </span>
  </div>
</template>

<style lang="scss">
@import './style/viriables.scss';
@import "style/mixins.scss";

.wrapper{
  // 设置纵向滚动 不会溢出
  overflow-y: auto;
  position: absolute;
  left:0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  // background-color: blue;
  // 内容区边距 底部留白.2rem
  padding: 0 0.18rem .2rem .18rem;
}
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
// 搜索框
.search {
  line-height: 0.32rem;
  background-color: #F5F5F5;
  color: #B7B7B7;
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
// 附近店铺
.nearby{
  &__title{
    margin:.16rem 0 .02rem 0;
    font-size: .18rem;
    // 取消h标签加粗效果
    font-weight: normal;
    color: $content-fontcolor;
  }
  &__item {
    display: flex;
    padding-top: .12rem;
    &__img {
      margin-right: .16rem;
      width: .56rem;
      height: .56rem;
    }
  }
  &__content{
    flex:1;
    padding-bottom: .12rem;
    border-bottom: .01rem solid $content-bgColor;
    &__title{
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }
    &__tags {
      margin-top: .08rem;
      line-height: .18rem;
      font-size: .13rem;
      color: $content-fontcolor;
    }
    &__tag {
      margin-right: .16rem;
    }
    &__highlight {
      margin: .08rem 0 0 0;
      line-height: .18rem;
      font-size: .13rem;
      color: #E93B3B;
    }
  }

}
</style>
