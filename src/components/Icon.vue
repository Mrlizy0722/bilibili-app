<template>
  <i class ='fa' :class ='[ iconClass , extraClass ]'></i>
</template>

<script>
require('../../font-awesome-4.7.0/css/font-awesome.css')
let map = {
  up : 'fa-chevron-up',
  down : 'fa-chevron-down',
  search : 'fa-search'
}
export default {
  props : {
    type : {
      type : String ,
      required : true 
    },
    extraClass :{
      type : String ,
      default : ''
    }

  },
  computed : {
    iconClass(){
      return map[this.type]
    }
  }
}

</script>
<style scoped >
</style>