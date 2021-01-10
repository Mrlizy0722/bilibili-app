<template>
  <div class='contation'>
    <div class='header'>
      <slot name="head"></slot>  
    </div>
    <div class='content'>
      <div class='left'>
        <slot name='left'></slot>
      </div>
      <div class='right'>
        <slot name='right'></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}

</script>
<style scoped>
.contation{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.header{
  height: 50px;
  box-shadow: 0 1xp 7px rgba(0, 0, 0, 0.5);
  text-align: center;
}
.content{
  position: absolute;
  top: 50px;
  left: 0;
}
.left{
  width: 250px;
  float: left;
  height: 100%;
}
.right{
  overflow: hidden;

  height: 100%;
}
</style>