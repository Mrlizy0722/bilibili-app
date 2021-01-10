<template>
<div class="title-menu">
  <Item :isActive= 'isActive' @itemClick ='$emit( "itemClick" )'>
    <div class='inner'> 
      <div class='left'>
        <slot name='title'></slot>
      </div>
      <div class='right'> 
         <slot name='icon'></slot>
      </div>
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
   type  : Boolean ,  // type 的类型 唯一个 boolean值
   required : true ,  // 必须要传值
   default : false ,  // 默认值为false 如果不传参的话
   isActive : Boolean 
  },
}

</script>
<style scoped>
.title-menu{
  width: 100%;
  height: 46px;
  line-height: 46px;
}
.inner{
  padding: 0 20px;
}
.left {
  float: left;
  color: #212121;
  font-weight: 500;
}
.right{
  float : right;
  font-size: 12px;
}
</style>