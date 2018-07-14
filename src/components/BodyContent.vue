<template>
  <el-container class="body-content">
    <el-main>
      <location-cell
        v-for="(todo, index) in todos"
        v-bind:todo="todo"
        v-bind:key="index"
      ></location-cell>
    </el-main>
    <el-aside width="200px">Aside</el-aside>
  </el-container>
</template>

<script>
import LocationCell from './LocationCell'

export default {
  name: 'BodyContent',
  components: {
    LocationCell
  },
  data () {
    return {
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body-content {
  min-width: 600px;
  max-width: 1100px;
  margin: 0 auto 0 auto;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
  min-width: 400px;
}

</style>
