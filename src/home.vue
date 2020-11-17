<template>
<img alt="Vue logo" src="./assets/logo.png">
<tableau />
</template>

<script>
import tableau from './components/table.vue'

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
