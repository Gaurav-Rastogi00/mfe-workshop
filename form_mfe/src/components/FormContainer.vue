<template>
  <div class="form-container">
    <p class="form-heading">Add New Joinee</p>
    <input type="text" class="input-box" placeholder="Name" v-model="formData.name" />
    <input type="number" class="input-box" placeholder="+91 9999999999" v-model="formData.number" />
    <input type="text" class="input-box" placeholder="Position" v-model="formData.position" />
    <input type="email" class="input-box" placeholder="Email" v-model="formData.email" />
    <textarea class="input-box" placeholder="Likes dancing .." v-model="formData.detail" />
    <br-btn class="add-btn" @btnclick="handleSubmit()" :width="200"> <span slot="label">ADD EMPLOYEE </span></br-btn>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BrBtn } from "@brightly/brightlycomponents/brightlycomponents-vue/src";

const formData = ref({
  name: '',
  number: '',
  email: '',
  position: "",
  detail: ""
});

const handleSubmit = () => {
  const formDataEvent = new CustomEvent('newMemberAddedToChristmasList', {
    detail: formData.value
  });
  document.dispatchEvent(formDataEvent);
  formData.value = {
    name: '',
    number: '',
    email: '',
    position: "",
    detail: ""
  }
};
</script>

<style scoped>
.form-heading {
  font-size: 20px;
  font-weight: 500;
  color: #1C1B1F;
  margin: 0;
}

.form-container {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}

.input-box {
  box-sizing: border-box;
  width: 100%;
  padding: 10px 20px;
  border-radius: 5px;
  border: 0.5px solid rgb(176, 171, 171);
}


.add-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 10px;
  width: fit-content;
  margin: auto;
  cursor: pointer;
}
</style>
