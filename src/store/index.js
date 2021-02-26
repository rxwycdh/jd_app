import { createStore } from 'vuex'

const setLocalCartStorage = (state) => {
  const { cartList } = state
  localStorage.cartList = JSON.stringify(cartList)
}
const getLocalCartStorage = () => {
  try {
    return JSON.parse(localStorage.cartList)
  } catch (e) {
    return {}
  }
}
export default createStore({
  state: {
    // 购物车全局存放的位置 不同商铺是分开的，所以key是商铺id
    cartList: getLocalCartStorage()
    // 每一个商铺的购物车再通过商品的id为key
    // shopId: {
    //   shopName: '沃尔玛',
    //   productList: {
    //    productId: {
    //      _id: 1,
    //      name:'番茄',
    //      imgUrl: '',
    //      sales: 10,
    //      price: 33.6,
    //      oldPrice: 39.6,
    //      count: 2
    //   }
    //  }

    // }

  },
  mutations: {
    changeItemToCart (state, payload) {
      const { shopId, productId, productInfo, num } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '',
        productList: {}
      }
      let product = shopInfo.productList[productId]
      if (!product) {
        productInfo.count = 0
        product = productInfo
      }
      product.count += num
      // 往购物车加商品，不管之前有没有都设置为选中
      if (num > 0) {
        product.check = true
      }
      if (product.count < 0) {
        product.count = 0
      }
      // 如果一开始存在就会覆盖
      shopInfo.productList[productId] = product
      // 重新存
      state.cartList[shopId] = shopInfo
      setLocalCartStorage(state)
    },
    changeCartItemChecked (state, payload) {
      const { shopId, productId } = payload
      const productItem = state.cartList[shopId].productList[productId]
      productItem.check = !productItem.check
      setLocalCartStorage(state)
    },
    cleanCartProducts (state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
      setLocalCartStorage(state)
    },
    setCartItemChecked (state, payload) {
      const { shopId, allCheck } = payload
      const products = state.cartList[shopId].productList
      if (products) {
        if (allCheck) {
          // 已经是全选状态，置为全不选
          for (const i in products) {
            const product = products[i]
            product.check = false
          }
        } else {
          for (const i in products) {
            const product = products[i]
            product.check = true
          }
        }
      }
      setLocalCartStorage(state)
    },
    changeShopName (state, payload) {
      const { shopId, shopName } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '',
        productList: {}
      }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
      setLocalCartStorage(state)
    },
    clearCartData (state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
      setLocalCartStorage(state)
    }
  },
  actions: {},
  modules: {}
})
