<template>
  <div class="shell">
    <Navbar />
    <div class="shell-container">
      <div class="list-container">
        <List @list-click="(data: {}) => getData(data)" />
      </div>
      <div class="form-container">
        <Form />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import List from "list/RemoteApp";
import Form from "form/RemoteApp";
import Navbar from "./Navbar.vue"

const details = ref();

const getData = (data: {}) => {
  details.value = data;
};
</script>

<style>
.shell {
  width: 100vw;
  height: 100vh;
}

.shell-container {
  box-sizing: border-box;
  display: flex;
  align-items: start;
  margin: 0;
}

.list-container {
  box-sizing: border-box;
  width: 40%;
  padding: 20px 20px 20px 40px;
}

.form-container {
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 20px 20px 40px;
}
</style>
