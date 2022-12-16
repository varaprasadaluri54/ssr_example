<template>
  <div>
    <h3 v-text="description"></h3>
    <p>It has {{ forks }} forks and {{ issues }} issues at the moment</p>
    <button @click="this.$fetch">refresh</button>
    <img src="~assets/NuxtJS_Logo.png" alt="" />
  </div>
</template>

<script>
const API = "https://api.github.com/repos/vuejs/vue";
export default {
  data() {
    return {
      description: "",
      forks: 0,
      issues: 0,
    };
  },
  async fetch() {
    const data = await (await fetch(API)).json();
    this.description = data.description;
    this.forks = data.forks;
    this.issues = data.open_issues;
  },
};
</script>

<style>
</style>