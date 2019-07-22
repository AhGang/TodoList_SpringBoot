<template>
      <div  v-bind:class="{'div-body-data-item':itemData.index % 2 == 0}">
         <span  class="div-body-data-table-del" v-if="item.isSelected">{{itemData.index+1}}.</span>
      <span v-else>{{itemData.index+1}}. </span> 
      <span>
         <Checkbox size="large" class="div-body-data-table-checkbox" @click="completedItem(itemData.index)" v-model="item.isSelected">  </Checkbox>
         <span v-if="!item.isEditing" @dblclick="editItemName(itemData.index)">
          <del v-if="item.isSelected" class="div-body-data-table-del" >{{item.val}}</del>
        <span v-else>{{item.val}}</span>  
         </span>
       <Input v-else v-model="item.val" :autofocus="true" class="div-body-data-table-input" size="small" @on-blur="itemInputOnBlur(itemData.index)" @on-enter="itemInputOnBlur(itemData.index)"></Input>
       </span>
      </div>
</template>
<script>
export default {
  name: 'Item',
props:['itemData'],
data(){
    return {
     
    }
  },
 computed:{
    item:function(){
       return this.$store.state.showItems[this.itemData.index]
    }
 }, 
 methods:{
    completedItem(index){
     this.$emit("completedItem",index)
   },
   editItemName(index) {
      this.$emit("editItemName",index)
   },
   itemInputOnBlur(index) {
      this.$emit("itemInputOnBlur",index)
   }
 }
}
</script>


