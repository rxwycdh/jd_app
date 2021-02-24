<template>
  <div class="mask" v-if="showCart" @click="handleCartShow"></div>
  <div class="cart">
    <div class="product" v-if="showCart">
      <div class="product__header">
        <div class="product__header__all" @click="() => setCartItemChecked(shopId, productCalculations.allChecked)">
          <span class="product__header__icon iconfont"
                v-html="productCalculations.allChecked ? '&#xe614;':'&#xe631;'"></span>
          全选
        </div>
        <div class="product__header__clear" @click="() => cleanCartProducts(shopId)">清空购物车</div>
      </div>
      <template v-for="item in currentCartList" :key="item._id">
        <div class="product__item" v-if="item.count > 0">
          <div class="product__item__checked iconfont"
               v-html="item.check ? '&#xe614;' : '&#xe631;'"
               @click="() => changeCartItemChecked(shopId, item._id)"></div>
          <img class="product__item__img" :src="item.imgUrl"/>
          <div class="pr oduct__item__detail">
            <h4 class="product__item__title">{{ item.name }}</h4>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>{{ item.price }}
              <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
            </p>
          </div>
          <div class="product__item__number">
          <span class="product__item__number__minus"
                @click="() => {changeCartItemInfo(shopId, item._id, item, -1)}">-</span>
            {{ item.count || 0 }}
            <span class="product__item__number__plus"
                  @click="() => {changeCartItemInfo(shopId, item._id, item, 1)}">+</span>
          </div>
        </div>

      </template>
    </div>

    <div class="check">
      <div class="check__icon">
        <img class="check__icon__img" @click="handleCartShow" src="http://www.dell-lee.com/imgs/vue3/basket.png"/>
        <div class="check__icon__tag">{{ productCalculations.totalCount }}</div>
      </div>
      <div class="check__info">
        总计: <span class="check__info__price">&yen;{{ productCalculations.totalPrice }}</span>
      </div>
      <div class="check__btn">
        <router-link :to="{name:'Home'}">
          去结算
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '@/views/shop/commonCartEffect'

const useCartEffect = (shopId) => {
  const { changeCartItemInfo } = useCommonCartEffect()

  const store = useStore()
  const cartMap = store.state.cartList

  const productCalculations = computed(() => {
    const productMap = cartMap[shopId]?.productList
    let totalCount = 0
    let totalPrice = 0
    let allChecked = true
    if (productMap) {
      for (const itemId in productMap) {
        const product = productMap[itemId]
        totalCount += product.count
        if (product.check) {
          totalPrice += (product.count * product.price)
        }
        if (product.count > 0 && !product.check) {
          allChecked = false
        }
      }
    }

    return {
      totalCount,
      totalPrice: totalPrice.toFixed(2),
      allChecked
    }
  })

  const currentCartList = computed(() => {
    // shopId不存在就为空
    return cartMap[shopId]?.productList || []
  })

  const changeCartItemChecked = (shopId, productId) => {
    store.commit('changeCartItemChecked', {
      shopId,
      productId
    })
  }

  const cleanCartProducts = (shopId) => {
    store.commit('cleanCartProducts', { shopId })
  }

  const setCartItemChecked = (shopId, allCheck) => {
    store.commit('setCartItemChecked', {
      shopId,
      allCheck
    })
  }
  return {
    productCalculations,
    currentCartList,
    changeCartItemInfo,
    changeCartItemChecked,
    cleanCartProducts,
    setCartItemChecked
  }
}

export default {
  name: 'Cart',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { productCalculations, currentCartList, changeCartItemInfo, changeCartItemChecked, setCartItemChecked, cleanCartProducts } = useCartEffect(shopId)
    const showCart = ref(false)
    const handleCartShow = () => {
      showCart.value = !showCart.value
    }
    return {
      productCalculations,
      currentCartList,
      showCart,
      changeCartItemInfo,
      shopId,
      changeCartItemChecked,
      cleanCartProducts,
      setCartItemChecked,
      handleCartShow
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../style/viriables";
@import '../../style/mixins';

.mask {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, .5);
  z-index: 1;
}

.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: #FFF;
}

.check {
  display: flex;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;
  line-height: .49rem;

  &__icon {
    position: relative;
    width: .84rem;

    &__img {
      display: block;
      margin: .12rem auto;
      width: .28rem;
      height: .26rem;
    }

    &__tag {
      position: absolute;
      left: .5rem;
      top: .04rem;
      padding: 0 .04rem;
      min-width: .2rem;
      height: .2rem;
      background-color: $highlight-fontColor;
      border-radius: .1rem;
      font-size: .12rem;
      line-height: .2rem;
      text-align: center;
      color: #FFF;
      transform: scale(.5);
      // 左侧中间的位置作为缩小的中心，那么左侧中间的位置就不会变
      transform-origin: left center;
    }
  }

  &__info {
    flex: 1;
    color: $content-fontcolor;
    font-size: .12rem;

    &__price {
      color: $highlight-fontColor;
      font-size: .18rem;
    }
  }

  &__btn {
    width: .98rem;
    line-height: .49rem;
    background-color: #4FB0F9;
    color: #FFF;
    font-size: .14rem;
    text-align: center;

    a {
      text-decoration: none;
      color: $bgColor;
    }
  }
}

// 购物车浮层
.product {
  overflow-y: scroll;
  // 撑满flex空间
  flex: 1;
  background-color: #FFF;

  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;

    &__detail {
      overflow: hidden;
    }

    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }

    &__title {
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }

    &__price {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $highlight-fontColor;
    }

    &__yen {
      font-size: .12rem;
    }

    &__origin {
      margin-left: .06rem;
      line-height: .2rem;
      font-size: .12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }

    &__sales {
      margin: .06rem 0;
      color: $content-fontcolor;
      font-size: .12rem;
    }

    &__number {
      position: absolute;
      right: 0;
      bottom: .12rem;

      &__minus, &__plus {
        display: inline-block;
        width: .2rem;
        height: .2rem;
        border-radius: 50%;
        font-size: .2rem;
        text-align: center;
        line-height: .16rem;
      }

      &__minus {
        border: .01rem solid $medium-fontColor;
        color: $medium-fontColor;
        margin-right: .05rem;
      }

      &__plus {
        background: $btn-bgColor;
        color: $bgColor;
        margin-left: .05rem;
      }
    }

    &__checked {
      color: #0091FF;
      font-size: .2rem;
      line-height: .5rem;
      margin-right: .2rem;
    }
  }

  &__header {
    display: flex;
    line-height: .52rem;
    border-bottom: 1px solid #F1F1F1;
    font-size: .14rem;
    color: #333333;

    &__all {
      width: .64rem;
      margin-left: .18rem;
    }

    &__icon {
      display: inline-block;
      color: #0091FF;
      font-size: .2rem;
      margin-right: .05rem;
      vertical-align: top;
    }

    &__clear {
      flex: 1;
      text-align: right;
      margin-right: .16rem;
    }
  }
}
</style>
