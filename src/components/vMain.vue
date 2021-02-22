<template lang="html">
  <section class="main">
      <Novedades />
    {{shop}}
  </section>

</template>

<script lang="js">
import Novedades from '../components/Novedades.vue'
  export default  {
    name: 'main',
    props: ['shop'],
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {

    },
    computed: {

    },
    components:{
      Novedades
    }
}


</script>

<style scoped lang="scss">

</style>
