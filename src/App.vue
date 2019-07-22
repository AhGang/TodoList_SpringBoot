<template>
  <div  id="app" style="background-color:#eee;position: fixed;width: 100%;height: 100%;">
    <ItemsGroup></ItemsGroup>
</div>
</template>
<script>
import ItemsGroup from './components/ItemsGroup'
export default {
  name: 'app',
  components:{ItemsGroup}
}
</script>
<style>
@import "./assets/css/styles.css"
</style>


