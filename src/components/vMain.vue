<template lang="html">
  <section class="main">
    <section  v-if="!this.content">
      <img :src="chargingSvg" class="svg">
    </section>
    <section v-if="this.content">
      <Novedades v-bind:shop="shop"/>
      <section class="categoria">
    <div v-for="i in content" v-bind:key="i.id">
      <article v-if="i.novedad==false" class="producto">
        <h2>{{i.nombre}} </h2>
        <p>{{i.descripcion}} </p>
        <img :src="i.photo">
        <button> ¡Lo quiero!</button>
        <p>Precio: <strong>${{i.precio}}</strong></p>
      </article>
    </div>
    </section>
    </section>
  </section>

</template>

<script lang="js">
import Novedades from '../components/Novedades.vue'
  export default  {
    name: 'main',
    props: ['shop'],
    mounted () {
      this.timeout()
    },
    data () {
      return {
        content:null,
        chargingSvg:'animation.svg'
      }
    },
    methods: {
      timeout(){
        setTimeout(() => {
          this.content=this.shop
        }, 2000);
      }
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
