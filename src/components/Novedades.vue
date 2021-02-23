<template lang="html">

  <section class="novedades">
    <div v-for="i in content" v-bind:key="i.id">
      <article v-if="i.novedad==true" class="producto">
        <p class="novedad">¡Novedad!</p>
        <h2>{{i.nombre}} </h2>
        
        <p>{{i.descripcion}} </p>
        <img :src="i.photo">
        <button> ¡Lo quiero!</button>
        <p>Precio: <strong>${{i.precio}}</strong></p>

      </article>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'novedades',
    props: ['shop'],
    mounted () {

    },
    data () {
      return {
        content:this.shop
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .novedades {

  }
</style>
