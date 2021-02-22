<template>

  <section class="header">    
    <div class="nav">
      <div>
      <img src="logo.png" />
      </div>
      <div class="links">
        <router-link to="/">Home</router-link> |
        <router-link to="/login">Login</router-link>
      </div>
    </div>
  </section>

</template>
<script lang="js">

  export default  {
    name: 'header',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
@import "../styles/header.scss";

</style>
