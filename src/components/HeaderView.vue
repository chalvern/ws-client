<template>
  <div class="header">
    <el-row type="flex" justify="center" :gutter="10">
      <el-col :span="18" style="text-align: left">
        <div class="grid-content">
          WhereSmile
        </div></el-col>
      <el-col :span="6" style="text-align: right">
        <div class="grid-content">
          Login
        </div>
        </el-col>
    </el-row>
  </div>
</template>
<script>
import 'element-ui/lib/theme-chalk/display.css'

export default {
  name: 'HeaderView',
  data () {
    return {
      msg: '希望能看到'
    }
  }
}
</script>
<style scoped>
  .header {
    min-width: 600px;
    max-width: 1100px;
    margin: 0 auto 0 auto;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
    margin: 20px 20px 0 20px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
