<template>
  <Layout>
    <div slot="head">
      菜单
    </div>
    <div slot="left">
      <Aside />
    </div>
    <div slot="right">
      右边
    </div>
  </Layout>
</template>

<script>
import Layout from '../components/Layout'
import Aside from '../components/Aside'
export default {
  components:{
    Layout,
    Aside
  }  
}

</script>
<style scoped>

</style>