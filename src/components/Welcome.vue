<template>
  <div>
    <h1>首页</h1>
    <router-link to="/itemsGroup">跳转到To Do List</router-link>
    <Input class="div-body-input" type="text" v-model="inputText"></Input>
    <button @click="jump">jump</button>
  </div>
</template>
<script>
export default {
  name: "welcome",
  data() {
    return {
      inputText:''
    };
  },
  computed: {},
  methods: {
    jump() {
      this.$router.push({ name: "home", params: { id: this.inputText } });
    }
  }
};
</script>
<style>
</style>


