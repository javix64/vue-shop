<template>
  <div class="home">
  <VMain v-bind:shop='shop'/>
  </div>
</template>

<script>
import VMain from '../components/vMain.vue'
export default {
  name: 'Home',
  components: {
    VMain,
  },
  props:['shop']
}
</script>
