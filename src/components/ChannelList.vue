<template>
<div>
  <div class='channels-list'
       :style = "{height : `${height}px`}"
  >
  <div class='items' 
       v-for= 'item in channels' 
       :key='item.id'
       :style= "{width :`${100 /columns}%`}">
     <changeel 
     @itemClick ='$emit( "itemClick" ,item.id)'  
     :isActive = "item.id == activeId"  
     :data= 'item'
     />
  </div>
  </div>
  <div class='collpase' @click='isExpand = !isExpand'>
    <span>{{isExpand ? '折叠' : '展开'}}</span>
    <Icon :type = " isExpand ? 'up' : 'down' "  extraClass= "icon"/>
  </div>
</div>

</template>

<script>
import changeel from './Changeel'
import change  from '../services/change' 
import Icon  from './Icon'
export default {
 props: {
   activeId:{
     type : Number ,
     required : true 
   },
   columns :{
     type : Number ,
     default : 2 
   }
 }, 
 components:{
   changeel,
   Icon
 }, 
 data(){
   return {
     channels : [],
     isExpand : true 
   }
 },
 computed : {
   height(){
     let rows = 3 ;
     if(this.isExpand){
       rows = Math.ceil(this.channels.length / this.columns )
     }
     console.log(rows)
     return rows * 40 
   }
 },
 async created() { 
  let datas  =  await change.getChangels() 
  this.channels =  datas.filter( item => item.id === 100 ? false : true )   
 }
}

</script>
<style scoped>
.channels-list{
  overflow: hidden;
  transition: 0.5s;
}
.items{
  float: left;
}
.collpase{
  clear : both;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #999;
  font-size: 14px;
  cursor: pointer;
}
.icon{
  font-size:15px ;
  margin-left: 8px;
}
</style>