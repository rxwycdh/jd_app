import { useStore } from 'vuex'
import { toRefs } from 'vue'

export const useCommonCartEffect = () => {
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
  return {
    changeCartItemInfo,
    cartList
  }
}
