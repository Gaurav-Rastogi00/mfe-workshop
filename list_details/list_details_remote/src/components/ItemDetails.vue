<template>
  <div class="container">
    <span class="title">{{ dataItem.name }}</span>
    <p class="description">{{ dataItem.email }}</p>
    <span class="date">{{ dataItem.number }}</span>
  </div>
</template>

<script setup>
const { dataItem } = defineProps(["dataItem"]);
</script>
