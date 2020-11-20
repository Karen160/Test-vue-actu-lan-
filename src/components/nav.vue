<template>
    <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Share</li>
    </nav>
</template>

<script>
export default {
  name: 'navTest',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
    background-color: aqua;
    display: flex;
    justify-content: space-around;
}

li{
    color:black;
    font-weight: 500;
}
</style>
