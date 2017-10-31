<template>
  <mt-header fixed :title="title" class="header"></mt-header>
</template>

<script>
    export default {
        props: ['title']
    }
</script>

<style scoped>
  /*.placeHeader{height: 5rem}*/
    .header {
        background: #333;
        color: #fff;
        height: 5rem;
        z-index: 100;
        text-align: center;
      font-size: 1.6rem;
    }
</style>
