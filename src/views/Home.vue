<template>

  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  <foooter></foooter>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
 import foooter from '@/components/footer.vue'



export default {
  name: 'Home',
  components: {
    HelloWorld,
    foooter
  }
}
</script>
