<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link
      :to="`/shop/${item._id}`"
      v-for="item in nearbyList"
      :key="item._id">
      <ShopInfo :item="item" :hide-border="false"/>
    </router-link>
  </div>
</template>
<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '@/components/ShopInfo'

const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
    }
  }
  return {
    nearbyList,
    getNearbyList
  }
}

export default {
  name: 'Nearby',
  components: { ShopInfo },
  setup () {
    const { nearbyList, getNearbyList } = useNearbyListEffect()
    getNearbyList()
    return { nearbyList }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import "../../style/mixins.scss";
// 附近店铺
.nearby {
  &__title {
    margin: .16rem 0 .02rem 0;
    font-size: .18rem;
    // 取消h标签加粗效果
    font-weight: normal;
    color: $content-fontcolor;
  }

  a {
    text-decoration: none;
  }
}
</style>
