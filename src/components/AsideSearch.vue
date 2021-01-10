<template>
<div class='channel-search'>
  <Search  @search='headleSearch' placeholder="搜索内容" />
</div>
</template>

<script>
import Search from './Search'
export default {
  components:{
    Search,
  },
    methods:{
    headleSearch(e){
      console.log(e)
    }
  }   
}

</script>
<style scoped >
.channel-search{
 box-sizing: border-box;
 width: 100%;
 padding : 0 18px ;
 height: 34px;
 margin: 18px 0;
}
</style>