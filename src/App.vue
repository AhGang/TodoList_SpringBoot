<template>
<div>
  <div>
    <router-link  to="/home">home</router-link>
  </div>
   <div>
     <router-link  to="/welcome">welcome</router-link>
   </div>
    <div>
      <router-link  to="/">返回</router-link>
    </div>
      
  <!-- <router-view></router-view> -->
  <router-view></router-view>
  <!-- <div  id="app" style="background-color:#eee;position: fixed;width: 100%;height: 100%;">
    <ItemsGroup></ItemsGroup> -->
<!-- </div> -->
</div>
</template>
<script>
import ItemsGroup from './components/ItemsGroup'
export default {
  name: 'app',
  components:{ItemsGroup},
  data(){
    return {
     
    }
  },
  created(){
    // this.welcomeRouterPush()
  },
  methods:{
    welcomeRouterPush(){
       this.$router.push('welcome')
    },
    showItemsStatus(data){
     this.$emit("showItemsStatus",data)
   }
  }
}
</script>
<style>
@import "./assets/css/styles.css"
</style>


