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
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
