<template>
  <div>
    <div class="div-footer">
      <a-button  class="div-footer-button" @click="backToWelcome">返回</a-button>
      <a-button  class="div-footer-button" @click="showItemList">List</a-button>
      <span class="div-footer-button">ID: {{dataName}}</span>
    </div>
    <div class="div-body-showItemList">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "welcome",
  data() {
    return {
      dataName: 0
    };
  },
  created() {
    this.dataName = this.$route.params.id;
  },
  methods: {
    showItemList() {
      this.$router.push({ name: "itemsGroup" });
    },
    backToWelcome() {
      this.$router.push({ name: "welcome" });
    }
  }
};
</script>
<style>
</style>

