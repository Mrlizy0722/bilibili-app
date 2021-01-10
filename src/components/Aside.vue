<template>
<div>
 <div style='aside'>
      <AsideSearch />
      <TitleMenu :isActive = ' activeId === 100'
                 @itemClick = 'activeId = 100'>
      <div slot='title'> 发现生活 </div>
      <div slot='icon'>  > </div>
      </TitleMenu> 
      <Channelist :columns='2' :activeId="activeId" @itemClick='activeId = $event' />
 </div>
</div>
</template>

<script>
import TitleMenu from './TitleMenu'
import Channelist from './ChannelList'
import  AsideSearch  from './AsideSearch'
export default {
 data(){
    return {
      activeId : 100 
    }
  },
  components: {
   TitleMenu,
   Channelist,
   AsideSearch
  },
}

</script>
<style scoped>
.aside{
  width: 100% ;
  height: 100%;
  overflow: auto;
}

</style>