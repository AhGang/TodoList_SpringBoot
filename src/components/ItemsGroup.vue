<template>
  <div>
    <Card class="div-card">
      <ListHeader></ListHeader>
      <div class="div-body">
        <Input class="div-body-input" type="text" v-model="$store.state.itemName"></Input>
        <Button type="success" class="div-body-add-button" @click="addItem">Add</Button>
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
    </Card>
  </div>
</template>

<script>
import Item from "./Item";
import ListHeader from "./ListHeader";
import ListFooter from "./ListFooter";
export default {
  name: "ItemsGroup",
  components: { Item, ListHeader, ListFooter },
  data() {
    return {
      status: "All"
    };
  },
  created() {
    this.$store.dispatch("initData");
  },
  methods: {
    addItem() {
      if (this.$store.state.itemName != "") {
        let item = {
          id: "",
          name: this.$store.state.itemName,
          state: this.status == "Complete" ? true : false,

        };
        this.$store.commit("resetItemName");
        this.$store.dispatch("postAItem", item);
      } else {
        this.$Message.error("Can not add a null item");
      }
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
    }
  }
};
</script>
