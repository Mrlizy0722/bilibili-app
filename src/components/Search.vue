<template>
<form class='search-area' @submit.prevent="headleSearch">
  <input type="text" v-model="searchValue" :placeholder='placeholder'>
  <div class='icon' @click='headleSearch'>
    <Icon type='search' />
  </div>
</form>
</template>

<script>
import Icon  from './Icon'
export default {
  props:{
    placeholder:{
      type : String,
      default : '8848'
    }
  },
  data(){
    return {
      searchValue : ''
    }
  },
  components:{
    Icon
  },
  methods : {
    headleSearch(){
      if(this.searchValue){
        this.$emit('search', this.searchValue)
      }
    }
  }
}

</script>
<style scoped>
.search-area{
 widows: 100%;
 height: 100%;
 box-sizing : border-box;
 border: 1px solid #e7e7e7;
 border-radius : 2px ;
 position: relative;
}
.search-area input{
  border: none;
  outline: none;
  width : 100%;
  height : 100%;
  box-sizing: border-box;
  padding-left: 8px;
  padding-right:45px;
}
.icon{
  position: absolute;
  width: 40px;
  height: 100%;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c0c0c0;
  cursor: pointer;
}
</style>