<template>
  <div
    class="location-cell"
    @click.self='getDetail(todo)'>
    {{ todo.text }}
  </div>
</template>

<script>
export default {
  name: 'LocationCell',
  props: ['todo'],
  methods: {
    getDetail (initial) {
      this.$router.push('/location/' + initial.text)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.location-cell {
    padding: 10px;
    line-height: 120%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgb(226, 226, 226);
    text-align: left;
}

</style>
