<template>
  <div>
    <h3>Members List</h3>
    <div
      v-for="(member, index) in membersList"
      :key="index"
      class="member-container"
    >
      <router-link to="member.name">
        <!-- <p @click="handleListSelection(member)">
          {{ member.name }}
        </p> -->
        <p @click="$emit('list-click', member)">
          {{ member.name }}
        </p>
      </router-link>
      <!-- <p>Email: {{ member.email }}</p>
      <p>Number: {{ member.number }}</p> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface memberType {
  name: string;
  email: string;
  number: number;
}

const dummyList: memberType[] = [
  {
    name: "Name 1",
    email: "one@gmail.com",
    number: 1234567890,
  },
  {
    name: "Name 2",
    email: "two@gmail.com",
    number: 1234567890,
  },
  {
    name: "Name 3",
    email: "three@gmail.com",
    number: 1234567890,
  },
];
const membersList = ref(dummyList);
</script>

<style scoped>
.member-container {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
}

.member-container p {
  margin: 0;
  text-align: left;
}
</style>
