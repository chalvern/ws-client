<template>
  <div class="footer">
    WhereSmile.com
  </div>
</template>
<script>
import 'element-ui/lib/theme-chalk/display.css'

export default {
  name: 'FooterView',
  data () {
    return {
      msg: '希望能看到'
    }
  }
}
</script>
<style scoped>
  .footer {
    min-width: 600px;
    max-width: 1100px;
    margin: 0 auto 0 auto;
    text-align: left;
  }
</style>
