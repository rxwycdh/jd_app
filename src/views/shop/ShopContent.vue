<template>
  <div class="content">
    <div class="category">
      <div class="category__item"
           :class="{'category__item--active':currentTab === item.tab}"
           v-for="item in categories" :key="item.name"
           @click="() => handleTabClick(item.tab)">{{ item.name }}
      </div>
    </div>

    <div class="product">
      <div class="product__item" v-for="item in list" :key="item._id">
        <img class="product__item__img" :src="item.imgUrl"/>
        <div class="product__item__detail">
          <h4 class="product__item__title">{{ item.name }}</h4>
          <p class="product__item__sales">月售{{ item.sales }}件</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>{{ item.price }}
            <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
          </p>
        </div>
        <div class="product__item__number">
          <span class="product__item__number__minus"
                @click="() => {changeCartItem(shopId, item._id, item, -1, shopName)}">-</span>
          {{ getProductCartCount(shopId, item._id) }}
          <span class="product__item__number__plus"
                @click="() => {changeCartItem(shopId, item._id, item, 1, shopName)}">+</span>
        </div>
      </div>
    </div>
    <Cart/>
  </div>
</template>
<script>
import { get } from '../../utils/request'
import { useRoute } from 'vue-router'
import { reactive, toRefs, ref, watchEffect } from 'vue'
import Cart from '@/views/shop/Cart'
import { useCommonCartEffect } from './commonCartEffect'
import { useStore } from 'vuex'

const categories = [
  {
    name: '全部商品',
    tab: 'all'
  },
  {
    name: '秒杀',
    tab: 'seckill'
  },
  {
    name: '新鲜水果',
    tab: 'fruit'
  }
]

const useTabEffect = () => {
  const currentTab = ref(categories[0].tab)
  const handleTabClick = (tab) => {
    currentTab.value = tab
  }
  return {
    currentTab,
    handleTabClick
  }
}
const useCurrentListEffect = (currentTab, shopId) => {
  const content = reactive({
    list: []
  })

  const getContentData = async () => {
    const result = await get(`/api/shop/${shopId}/products`, {
      tab: currentTab.value
    })
    if (result?.errno === 0 && result?.data.length) {
      content.list = result.data
    }
  }
  watchEffect(() => {
    // watchEffect自动监听依赖的外部的变量，如果变量变化就会执行
    getContentData()
  })
  const { list } = toRefs(content)
  return { list }
}
const useCartEffect = () => {
  const store = useStore()

  const { changeCartItemInfo, cartList } = useCommonCartEffect()
  const changeShopName = (shopId, shopName) => {
    store.commit('changeShopName', {
      shopId,
      shopName
    })
  }
  const changeCartItem = (shopId, productId, item, num, shopName) => {
    changeCartItemInfo(shopId, productId, item, num)
    changeShopName(shopId, shopName)
  }

  const getProductCartCount = (shopId, productId) => {
    return cartList.value?.[shopId]?.productList?.[productId]?.count || 0
  }

  return {
    cartList,
    changeCartItem,
    getProductCartCount
  }
}
export default {
  name: 'Content',
  props: ['shopName'],
  components: { Cart },
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    // tab切换逻辑
    const { currentTab, handleTabClick } = useTabEffect()
    const { list } = useCurrentListEffect(currentTab, shopId)
    const { cartList, changeCartItem, getProductCartCount } = useCartEffect()

    return {
      list,
      categories,
      handleTabClick,
      currentTab,
      shopId,
      cartList,
      changeCartItem,
      getProductCartCount
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../style/viriables";
@import '../../style/mixins';

.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: 0;
}

.category {
  width: .76rem;
  overflow-y: scroll;
  height: 100%;
  background: $search-bgColor;

  &__item {
    line-height: .4rem;
    text-align: center;
    font-size: .14rem;
    color: $content-fontcolor;

    &--active {
      background: $bgColor;
    }
  }
}

.product {
  overflow-y: scroll;
  // 撑满flex空间
  flex: 1;

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
      width: .68rem;
      height: .68rem;
      margin-right: .16rem;
    }

    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }

    &__sales {
      margin: .06rem 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
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
  }
}
</style>
