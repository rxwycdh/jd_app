<template>
  <div class="wrapper">
    <div class="search">
      <div
        @click="handleBackClick"
        class="search__back iconfont"
      >&#xe603;
      </div>
      <div class="search__content">
        <div class="search__content__icon iconfont">&#xe61e;</div>
        <input class="search__content__input" placeholder="请输入商品名称"/>
      </div>
    </div>
    <!--    当图片加载完毕后才渲染，避免看见裂图-->
    <shop-info :item="item" :hide-border="true" v-if="item.imgUrl"/>
    <shop-content :shopName="item.name"/>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import ShopInfo from '@/components/ShopInfo'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import ShopContent from './ShopContent'

// 获取当前商铺信息
const useShopInfoEffect = () => {
  const route = useRoute()

  const data = reactive({ item: {} })
  const getItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)

  return {
    item,
    getItemData
  }
}

// 回退按钮
const usBackRouterEffect = () => {
  const router = useRouter()

  const handleBackClick = () => {
    router.back()
  }
  return { handleBackClick }
}

export default {
  name: 'Shop',
  components: {
    ShopInfo,
    ShopContent
  },
  setup () {
    const { getItemData, item } = useShopInfoEffect()
    getItemData()

    const { handleBackClick } = usBackRouterEffect()

    return {
      item,
      handleBackClick
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../style/viriables";

.wrapper {
  padding: 0 .18rem;
}

.search {
  margin: .14rem 0 .04rem 0;
  display: flex;
  line-height: .32rem;

  &__back {
    width: .3rem;
    font-size: .2rem;
    color: #B6B6B6;
  }

  &__content {
    display: flex;
    flex: 1;
    background: $search-bgColor;
    border-radius: .16rem;

    &__icon {
      width: .44rem;
      text-align: center;
      color: $search-fontColor;
    }

    &__input {
      // 宽度撑满flex所给他分配的空间
      width: 100%;
      padding-right: .2rem;
      height: .32rem;
      border: none;
      outline: none;
      background: none;
      color: $content-fontcolor;
      font-size: .14rem;

      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}
</style>
