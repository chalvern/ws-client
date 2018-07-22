<template>
  <el-container class="body-content">
    <el-main>
      <location-cell
        v-for="(todo, index) in todos"
        v-bind:todo="todo"
        v-bind:key="index"
      ></location-cell>
    </el-main>
    <el-aside width="200px" class="hidden-sm-and-down">
      <description-tip></description-tip>
    </el-aside>
  </el-container>
</template>

<script>
import LocationCell from '../LocationCell'
import DescriptionTip from '../DescriptionTip'

export default {
  name: 'BodyContent',
  components: {
    LocationCell,
    DescriptionTip
  },
  data () {
    return {
      todos: []
    }
  },
  created () {
    this.todos = [
      { text: '复旦大学' },
      { text: '复旦大学邯郸校区' },
      { text: '上海' },
      { text: '华东理工大学徐汇校区' }
    ]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body-content {
  width: 80%;
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
  min-height: 600px;
}

@media (max-width: 870px) {
  .body-content {
    width: 100%;
  }
}

</style>
