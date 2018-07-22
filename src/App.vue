<template>
  <div id="app">
    <el-container>
      <el-header>
        <header-view></header-view>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
        <footer-view></footer-view>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import HeaderView from './components/HeaderView'
import FooterView from './components/FooterView'

export default {
  name: 'App',
  components: {
    HeaderView,
    FooterView
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  margin: 0;
}

.el-main {
  background-color: #e6e6e6;
}

html, body {
  height: 100%;
  margin: 0;
}

@media (max-width: 870px) {
  .el-main {
    padding: 10px 1px 0;
  }
}

</style>
