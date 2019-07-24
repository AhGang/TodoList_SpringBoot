<template>
  <div v-bind:class="{'div-body-data-item':index % 2 == 0}">
    <span class="div-body-data-table-del" v-if="itemIsSelected">{{index+1}}.</span>
    <span v-else>{{index+1}}.</span>
    <span>
      <Checkbox @change="completedItem(index)" v-model="itemIsSelected"></Checkbox>
      <span v-if="!isEditing" @dblclick="editItemName()">
        <del v-if="itemIsSelected" class="div-body-data-table-del">{{itemVal}}</del>
        <span v-else>{{itemVal}}</span>
      </span>
      <a-input
        v-else
        v-model="itemVal"
        :autofocus="true"
        class="div-body-data-table-input"
        size="small"
        @blur="itemInputOnBlur(index)"
        @on-enter="itemInputOnBlur(index)"
      ></a-input>
    </span>
    <a-button class="div-body-data-table-item_delete_btn" @click="deleteItem" icon="delete"></a-button>
  </div>
</template>
<script>
export default {
  name: "Item",
  props: ["index"],
  data() {
    return {
      isEditing: false
    };
  },
  computed: {
    itemIsSelected: {
      get() {
        return this.$store.state.showItems[this.index].state;
      },
      set() {
        this.$store.commit("completedItem", this.index);
      }
    },
    itemVal: {
      get() {
        return this.$store.state.showItems[this.index].name;
      },
      set(itemVal) {
        this.$store.commit("updateItem", { name: itemVal, index: this.index });
      }
    }
  },
  methods: {
    completedItem(index) {
      this.$store.dispatch("putAItem", index);
    },
    editItemName(index) {
      this.isEditing = true;
    },
    itemInputOnBlur(index) {
      this.$store.dispatch("putAItem", index);
      this.isEditing = false;
    },
    deleteItem(index) {
      this.$store.dispatch("deleteAItem", this.index);
    }
  }
};
</script>


