<template>
  <div id="app">
    <VHeader/>
    <router-view v-bind:shop="shop"/>
    <VFooter />
  </div>
</template>
<script>
import {db} from './db'
import VHeader from './components/vHeader.vue'
import VFooter from './components/vFooter.vue'
export default {
  name: 'Home',
  components: {
    VHeader,
    VFooter
  },
  data() {
    return {
      shop: [],
    }
  },

  firestore:{
    shop: db.collection('shop'),
  },
  methods: {
    
  },
}

</script>
<style lang="scss" >
@import "./styles/_mixins.scss";
@import "./styles/main.scss";
</style>
