<template>
  <!-- <nav>
    <a href="/list"> Member's List</a>
    <a href="/form"> Add New Member</a>
  </nav> -->
  <List />
  <Form />
</template>

<script setup lang="ts">
import List from "list/RemoteApp";
import Form from "form/RemoteApp";
</script>

<style>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  box-sizing: border-box;
  background-color: #ccebeb;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
  padding: 20px 40px;
}

nav a {
  cursor: pointer;
  color: black;
}
</style>
