<template>
  <div class="wrapper">
    <TopArea/>
    <ProductList/>
    <Order/>
  </div>

</template>

<script>
import TopArea from '@/views/orderConfirmation/TopArea'
import ProductList from '@/views/orderConfirmation/ProductList'
import Order from '@/views/orderConfirmation/Order'

export default {
  name: 'OrderConfirmation',
  components: {
    TopArea,
    ProductList,
    Order
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>

.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #EEE;
  overflow-y: scroll;
}

</style>
