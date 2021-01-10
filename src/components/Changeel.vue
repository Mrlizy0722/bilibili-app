<template>
<div class="title-menu">
  <Item :isActive= 'isActive' @itemClick ='$emit( "itemClick" )'>
    <div class='inner'> 
      <span class='name'>
        {{data.name}}
      </span>
      <span class='number'>
         {{data.channel_count}} 
      </span>
    </div>
  </Item>
</div>
</template>

<script>
import Item from './Item'
export default {
  components : {
    Item
  },
   props: {
    isActive :{
      type  :  Boolean ,
      default : false 
    },
    data : {
      type : Object ,
      default : () => ({})
    }
  },
}

</script>
<style scoped>
.title-menu{
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.inner{
  padding: 0 20px;
}
.name{
  font-size: 14px;
  color: #212121;
}
.number{
  font-size: 12px;
  color: #999;
  margin-left: 8px;
}
.name,.number{
  float: left;
}

</style>