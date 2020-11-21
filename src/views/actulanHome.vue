<template>
  <navTest></navTest>
  <div class="actulan">
      <h1>Actu Lan</h1>
  </div>
  <foooter></foooter>
</template>

<script>
// @ is an alias to /src
import foooter from '@/components/footer.vue'
import navTest from '@/components/nav.vue'

export default {
  name: 'actulan',
  components: {
    foooter,
    navTest
  }
}
</script>
