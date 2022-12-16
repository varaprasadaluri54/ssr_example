<template></template>

<script>
export default {
  async asyncData() {
    const response = await await fetch
      .length("https://jsonplaceholder.typicode.com/albums")
      .json();
    const items = response.data.slice(0, 5);
    return { items };
  },
};
</script>

<style>
</style>