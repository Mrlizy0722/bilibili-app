<template>
<div class="item" :class="{active: isActive}" @click = 'active' >
  <slot></slot> 
</div>
</template>

<script>
export default {
  props: {
   type  : Boolean ,  // type 的类型 唯一个 boolean值
   required : true ,  // 必须要传值
   default : false ,  // 默认值为false 如果不传参的话
   isActive : Boolean 
  },
  methods :{
    active(){
      this.$emit('itemClick')
    }
  }

}

</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.active{
  background:#e7e7e7;
}
.item{
  cursor: pointer;
  width: 100%;
  height: 100%;
}
.item:hover{
  transition: 0.2s;
  background: #f4f4f4;
}
</style>