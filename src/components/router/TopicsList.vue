<template>
  <el-container class="body-content">
    <el-main>
      <location-cell
        v-for="(todo, index) in todos"
        v-bind:todo="todo"
        v-bind:key="index"
      ></location-cell>
    </el-main>
    <el-aside width="200px">
      <description-tip></description-tip>
    </el-aside>
  </el-container>
</template>

<script>
import LocationCell from '../LocationCell'
import DescriptionTip from '../DescriptionTip'

export default {
  name: 'TopicsList',
  components: {
    LocationCell,
    DescriptionTip
  },
  data () {
    return {
      todos: []
    }
  },
  watch: {
    $route () {
      this.todos = [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '学习 JavaScript' },
        { text: '整个牛项目' }
      ]
    }
  },
  created () {
    this.todos = [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '学习 JavaScript' },
      { text: '整个牛项目' }
    ]
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
  color: #333;
  text-align: center;
  margin-left: 20px;
}

.el-main {
  background-color: #FBFBFB;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
  min-width: 400px;
  min-height: 600px;
}

</style>
