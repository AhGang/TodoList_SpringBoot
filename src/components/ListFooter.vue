<template>
  <div class="div-footer">
    <Button type="text" class="div-footer-button"  @click="showItemsStatus('All')">All</Button>
    <Button type="text" class="div-footer-button"  @click="showItemsStatus('Active')">Active</Button>
    <Button type="text" class="div-footer-button"  @click="showItemsStatus('Complete')">Complete</Button>
  </div>
</template>
<script>
export default {
  name: 'listFooter',
  data(){
    return {
     
    }
  },
  methods:{
    showItemsStatus(data){
     this.$emit("showItemsStatus",data)
   },

  }
}
</script>

