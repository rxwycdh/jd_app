<template>
  <div class="wrapper">
    <StaticPart />
    <Nearby />
  </div>
  <Docker />
</template>

<style lang="scss" scoped>

.wrapper{
  // 设置纵向滚动 不会溢出
  overflow-y: auto;
  position: absolute;
  left:0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  // background-color: blue;D
  // 内容区边距 底部留白.2rem
  padding: 0 0.18rem .2rem .18rem;
}

</style>

<script>
import StaticPart from './StaticPart'
import Nearby from './Nearby'
import Docker from '@/views/home/Docker'
export default {
  name: 'Home',
  components: { StaticPart, Nearby, Docker }
}
</script>
