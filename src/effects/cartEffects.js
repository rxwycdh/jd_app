import { useStore } from 'vuex'
import { toRefs, computed } from 'vue'

export const useCommonCartEffect = (shopId) => {
  const store = useStore()
  // store的数据是reactive的
  const { cartList } = toRefs(store.state)

  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeItemToCart', {
      shopId,
      productId,
      productInfo,
      num
    })
  }

  const currentCartList = computed(() => {
    // shopId不存在就为空
    const productList = cartList.value[shopId]?.productList || {}
    const notEmptyProductList = {}
    for (const i in productList) {
      const product = productList[i]
      if (product.count > 0) {
        notEmptyProductList[i] = product
      }
    }
    return notEmptyProductList
  })

  const shopName = computed(() => {
    // shopId不存在就为空
    return cartList.value[shopId]?.shopName || ''
  })

  const productCalculations = computed(() => {
    const productMap = cartList.value[shopId]?.productList
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

  return {
    changeCartItemInfo,
    currentCartList,
    cartList,
    shopName,
    productCalculations
  }
}
