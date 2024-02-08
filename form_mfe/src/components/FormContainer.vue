<template>
  <div class="form-container">
    <h3>Add member to christmas list</h3>
    <input
      type="text"
      class="input-box"
      placeholder="Enter Name"
      v-model="formData.name"
    />
    <input
      type="number"
      class="input-box"
      placeholder="Enter Phone Number"
      v-model="formData.number"
    />
    <input
      type="email"
      class="input-box"
      placeholder="Enter Email"
      v-model="formData.email"
    />
    <button class="add-btn" @click="handleSubmit">ADD DATA</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "FormContainer",
  props: {
    msg: String,
  },

  data() {
    return {
      formData: {
        name: "",
        number: "",
        email: "",
      },
    };
  },

  methods: {
    handleSubmit() {
      console.log("Form submitted:", this.formData);
      const formDataEvent = new CustomEvent("newMemberAddedToChristmasList", {
        detail: this.formData,
      });

      window.dispatchEvent(formDataEvent);
    },
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}

.input-box {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: rgb(214, 242, 242);
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
