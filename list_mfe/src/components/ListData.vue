<template>
  <div>
    <div v-for="(member, index) in membersList" :key="index" class="member-container">
      <br-card>
        <div class="card">
          <router-link to="member.name">
            <div class="name" @click="$emit('list-click', member)">{{ member.name }}</div>
          </router-link>
          <div class="contact">{{ member.position }}</div>
          <div class="details">{{ member.detail }}</div>
          <div class="contact">{{ member.email }}</div>
          <div class="contact">{{ member.number }}</div>
        </div>
      </br-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BrCard } from "@brightly/brightlycomponents/brightlycomponents-vue/src";
import { onMounted, ref } from "vue";

onMounted(() => {
  document.addEventListener('newMemberAddedToChristmasList', (event: any) => {
    console.log("Here is the added detail ", event.detail);
    membersList.value.splice(0, 0, event.detail as memberType)
  });
});

interface memberType {
  name: string;
  email: string;
  number: number;
  position?: string;
  detail?: string;
}

const dummyList: memberType[] = [
  {
    name: "John",
    email: "one@gmail.com",
    number: 1234567890,
    position: "SD 1",
    detail: "Hi I like swimming and coding, I am a National level swimmer and blaa blaa blaa"
  },
  {
    name: "Doe",
    email: "two@gmail.com",
    number: 1234567890,
    position: "Software Engineer ||",
    detail: "Hi I like swimming and coding, I am a National level swimmer and blaa blaa blaa"
  },
  {
    name: "Shawn",
    email: "three@gmail.com",
    number: 1234567890,
    position: "Product Manager",
    detail: "Hi I like swimming and coding, I am a National level swimmer and blaa blaa blaa"
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

.card {
  width: 100%;
  height: 100%;

  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Arial, sans-serif;
  text-align: left;
}

.name {
  font-weight: bold;
  font-size: 12px;
}

.contact {
  font-size: 10px;
  color: #b3c6d3;
}

.details {
  font-size: 11px;
  max-width: 300px;
  color: #124488;

}
</style>
