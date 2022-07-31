<template>
  <div><h1>clockmanager</h1>
  <p>{{userid}}</p>
  </div>
</template>
<script>
export default {
  name: 'WorkingTimes',
  props: ['userid']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content h1 {
    text-align: left;
    font-size: 2em;
    margin-bottom: 0.5em;
    color: #7a7a7a;
    font-size: 1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}
</style>
