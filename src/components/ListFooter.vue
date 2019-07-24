<template>
  <div class="div-footer">
    <a-button type="primary" class="div-footer-button"  @click="showItemsStatus('All')">All</a-button>
    <a-button type="primary" class="div-footer-button"  @click="showItemsStatus('Active')">Active</a-button>
    <a-button type="primary" class="div-footer-button"  @click="showItemsStatus('Complete')">Complete</a-button>
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

<style scoped>
  .ant-btn-primary{
    margin-left: 20px;
    margin-bottom: 10px;
    width: 90px;
    color: #fff;
    background-color: darkseagreen;
    border-color: darkseagreen;
}
</style>