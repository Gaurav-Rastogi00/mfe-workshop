<template>
  <div class="container">
    <span class="title">{{ itemDetail.name }}</span>
    <p class="description">{{ itemDetail.email }}</p>
    <span class="date">{{ itemDetail.number }}</span>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
const itemDetail = ref({});
const dummyData = ref([
  {
    id: "U1",
    name: "Ayush Yadav",
    email: "one@gmail.com",
    number: 1234567890,
  },
  {
    id: "U2",
    name: "Ben Stokes",
    email: "two@gmail.com",
    number: 1234567890,
  },
  {
    id: "U3",
    name: "Yujiro Hanma",
    email: "three@gmail.com",
    number: 1234567890,
  },
]);

const { dataItem, memberData } = defineProps(["dataItem", "memberData"]);
// console.log("List Props", memberData, dataItem);

const route = useRoute();
// console.log("Route Object", route);

const nameRef = ref("");

const getIndividualDetails = () => {
  itemDetail.value = dummyData.value.filter(
    (item) => nameRef.value === item.id
  )[0];
};

onMounted(() => {
  nameRef.value = route.params.id;
  getIndividualDetails();
});
</script>
