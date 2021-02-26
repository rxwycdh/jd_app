<template>
  <div class="order">
    <div class="order__price">实付金额 <b>&yen;{{ productCalculations.totalPrice }}</b></div>
    <div class="order__btn" @click="() => handleSubmitClick(true)">提交订单</div>
  </div>
  <div class="mask"
       v-show="showConfirm" @click="() => handleSubmitClick(false)">
    <div class="mask__content" @click.stop>
      <h3 class="mask__content__title">确认离开收银台？</h3>
      <p class="mask__content__desc">请尽快完成支付</p>
      <div class="mask__content__btns">
        <div class="mask__content__btn mask__content__btn--first"
             @click="() => handleConfirmOrder(true)">取消订单
        </div>
        <div class="mask__content__btn mask__content__btn--last"
             @click="() => handleConfirmOrder(false)">确认支付
        </div>
      </div>
    </div>
    <Toast v-if="show" :message="toastMessage"/>
  </div>
</template>
<script>
import { useCommonCartEffect } from '@/effects/cartEffects'
import { post } from '../../utils/request'
import { useRoute, useRouter } from 'vue-router'
import Toast, { useToastEffect } from '../../components/Toast'
import { useStore } from 'vuex'
import { ref } from 'vue'

const useMakeOrderEffect = (currentCartList, shopName, shopId, showToast) => {
  const router = useRouter()
  const store = useStore()

  const handleConfirmOrder = async (isCanceled) => {
    const products = []
    for (const i in currentCartList.value) {
      const product = currentCartList.value[i]
      products.push({
        id: parseInt(product._id),
        num: product.count
      })
    }

    try {
      const result = await post('api/order', {
        addressId: 1,
        shopId,
        shopName: shopName.value,
        isCanceled: isCanceled,
        products

      })
      if (result?.errno === 0) {
        store.commit('clearCartData', { shopId })
        router.push({ name: 'OrderList' })
      } else {
        showToast('创建订单失败')
      }
    } catch (e) {
      console.log(e)
      showToast('请求失败' + e.message)
    }
  }

  return { handleConfirmOrder }
}

const useShowMaskEffect = () => {
  const showConfirm = ref(false)
  const handleSubmitClick = (status) => {
    showConfirm.value = status
  }

  return {
    handleSubmitClick,
    showConfirm
  }
}

export default {
  name: 'Order',
  components: { Toast },
  setup () {
    const route = useRoute()
    const shopId = parseInt(route.params.id, 10)

    const { show, toastMessage, showToast } = useToastEffect()

    const { productCalculations, shopName, currentCartList } = useCommonCartEffect(shopId)

    const { handleSubmitClick, showConfirm } = useShowMaskEffect()

    const { handleConfirmOrder } = useMakeOrderEffect(currentCartList, shopName, shopId, showToast)
    return {
      productCalculations,
      handleConfirmOrder,
      show,
      toastMessage,
      showConfirm,
      handleSubmitClick
    }
  }
}
</script>
<style lang="scss">
@import "../../style/viriables";
@import '../../style/mixins';

.order {
  display: flex;
  height: .49rem;
  line-height: .49rem;
  background: $bgColor;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  &__price {
    flex: 1;
    // text-indent:首行文本缩进
    text-indent: .24rem;
    font-size: .14rem;
    color: $content-fontcolor;
  }

  &__btn {
    width: .98rem;
    background: #4FB0F9;
    color: $bgColor;
    font-size: .14rem;
    text-align: center;
  }
}

.mask {
  // 蒙层
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 1;
  background: rgba(0, 0, 0, .5);

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3rem;
    height: 1.56rem;
    background: #FFF;
    border-radius: .04rem;
    text-align: center;

    &__title {
      font-size: .18rem;
      color: #333;
      line-height: .26rem;
      margin: .24rem 0 0 0;
    }

    &__desc {
      margin: .08rem 0 0 0;
      font-size: .14rem;
      color: #666;
    }

    &__btns {
      display: flex;
      margin: .24rem .58rem;
    }

    &__btn {
      flex: 1;
      width: .8rem;
      line-height: .32rem;
      border-radius: .16rem;

      &--first {
        margin-right: .12rem;
        border: .01rem solid #4FB0F9;
        color: #4FB0F9;
      }

      &--last {
        margin-left: .12rem;
        background: #4FB0F9;
        color: #fff;
      }
    }
  }
}
</style>
