<template>
<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/hello">hello</router-link>
  </div>
  <router-view/>
  <img alt="Vue logo" src="./assets/logo.png">
<tableau />
</template>

<script>
import tableau from '@/components/table.vue'

export default {
    name: 'Tab',
    components: {
        tableau,
    }

}
</script>

<style>
#Tab {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
