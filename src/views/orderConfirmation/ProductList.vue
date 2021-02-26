<template>
  <div class="products">
    <div class="products__title">{{ shopName }}</div>
    <div class="products__wrapper">
      <div class="products__list">

        <div class="products__item" v-for="item in currentCartList" :key="item._id">
          <img class="products__item__img" :src="item.imgUrl"/>
          <div class="products__item__detail">
            <h4 class="products__item__title">{{ item.name }}</h4>
            <p class="products__item__price">
              <span>
              <span class="products__item__yen">&yen;</span>
                {{ item.price }} × {{ item.count }}
              </span>
              <span class="products__item__total">
              <span class="products__item__y en">&yen;</span>
                {{ (item.price * item.count).toFixed(2) }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '@/effects/cartEffects'

export default {
  name: 'ProductList',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { currentCartList, shopName } = useCommonCartEffect(shopId)

    return {
      currentCartList,
      shopName
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../style/viriables";
@import '../../style/mixins';

.products {
  margin: .16rem .18rem 1rem .18rem;
  background: $bgColor;
  border-radius: .04rem;

  &__wrapper {
    // 使用wrapper来包裹list，使滚动list的时候上面与店铺名称保持间距
    position: absolute;
    margin: 0 .18rem;
    left: 0;
    right: 0;
    bottom: .6rem;
    top: 2.6rem;
    overflow-y: scroll;
  }

  &__list {
    // list改为由内容撑开
    background: $bgColor;
  }

  &__title {
    font-size: .16rem;
    color: $content-fontcolor;
    padding: .16rem;
  }

  &__item {
    position: relative;
    display: flex;
    padding: 0 .16rem .16rem .16rem;
    overflow-y: scroll;

    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }

    &__detail {
      flex: 1;
    }

    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }

    &__price {
      display: flex;
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $highlight-fontColor;
    }

    &__total {
      text-align: right;
      flex: 1;
      color: $dark-fontColor;
    }

    &__yen {
      font-size: .12rem;
    }

    &__sales {
      margin: .06rem 0;
      color: $content-fontcolor;
      font-size: .12rem;
    }

  }

}
</style>
