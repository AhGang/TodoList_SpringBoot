<template>
  <div>
    <div class="div-card">
      <ListHeader></ListHeader>
      <div class="div-body">
        <a-input class="div-body-input" v-model="$store.state.itemName"></a-input>
        <a-button type="primary" class="div-body-add-button" @click="addItem">Add</a-button>
        <a-modal
          title="Confirm To Add"
          :visible="modalVisible"
          @ok="handleOk"
          @cancel="handleCancel"
        >
        </a-modal>
        <div class="div-body-data-table">
          <div class="div-body-data-table-outer">
            <div
              class="div-body-data-table-single"
              v-for="(el, index) in $store.state.showItems"
              :key="index"
            >
              <Item :index="index"></Item>
            </div>
          </div>
        </div>
      </div>
      <ListFooter @showItemsStatus="showItemsStatus"></ListFooter>
    </div>
  </div>
</template>

<script>
import styles from "../assets/css/diyStyles.less";
import Item from "./Item";
import ListHeader from "./ListHeader";
import ListFooter from "./ListFooter";
export default {
  name: "ItemsGroup",
  components: { Item, ListHeader, ListFooter },
  data() {
    return {
      status: "All",
      modalVisible: false
    };
  },
  created() {
    this.$store.dispatch("initData");
  },
  methods: {
    addItem() {
      this.modalVisible = true;
    },
    showItemsStatus(status) {
      this.status = status;
      if (status == "Active") {
        this.$store.commit("filterItems", "Active");
      } else if (status == "Complete") {
        this.$store.commit("filterItems", "Complete");
      } else {
        this.$store.commit("getAllItems");
      }
    },
    completedItem(index) {
      let itemStatus = this.showItems[index].state;
      this.$store.commit("setCompletedItem", {
        itemStatus: itemStatus,
        index: index
      });
    },
    editItemName(index) {
      this.$store.commit("isEditItem", { index: index, status: true });
    },
    itemInputOnBlur(index) {
      this.$store.commit("isEditItem", { index: index, status: false });
    },
    backToHome() {
      this.$router.push("welcome");
    },
    handleOk() {
      if (this.$store.state.itemName != "") {
        let item = {
          id: "",
          name: this.$store.state.itemName,
          state: this.status == "Complete" ? true : false
        };
        this.$store.dispatch("postAItem", item);
        this.$store.commit("resetItemName");
      } else {
        this.$message.error("Can not add a null item");
      }
      this.modalVisible = false;
    },
    handleCancel() {
      this.modalVisible = false;
    }
  }
};
</script>
<style scoped>
.ant-btn-primary {
  margin-left: 10px;
  width: 70px;
  color: #fff;
  background-color: darkseagreen;
  border-color: darkseagreen;
}
</style>