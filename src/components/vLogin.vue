<template lang="html">

  <section class="login">
    <button v-if="!authenticated" @click="login">Login</button>
<div v-if="authenticated">
<button @click="logout">Logout</button>
<h1>Hi {{ firstName }}!</h1>
    <p>holi</p>
    <p>holi</p>
    <p>holi</p>
</div>
  </section>

</template>

<script lang="js">
import Firebase from '../db.js';
  export default  {
    name: 'login',
    props: [],
    mounted: function() {
      Firebase.auth.onAuthStateChanged( user => {
        if (user) {
          this.user.loggedIn = true;
          this.user.data = user;
        }
        else {
          this.user.loggedIn = false;
          this.user.data = {};
        }
      })
    },
    data () {
      return {
        user: {
          loggedIn: false,
          data: {}
        }
      }
    },
    methods: {
      login() {
        Firebase.login();
      },
      logout() {
        Firebase.logout()
      }
    },
    computed: {
        authenticated(){
          return this.user.loggedIn
        },
        firstName(){
          if (this.user.data.displayName) {
            return this.user.data.displayName.split(' ')[0]
          }
          return null
        }
    },
}


</script>

<style scoped lang="scss">
@import "../styles/login.scss";

</style>
