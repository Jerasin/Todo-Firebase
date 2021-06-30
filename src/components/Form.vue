<template>
  <div id="form">
    <div class="container">
      <h1 class="header">App Todos</h1>

      <div class="content">
        <form @submit.prevent="onSubmit">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Owner:</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              v-model.trim="form.owner"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Todo:</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              v-model="form.todo"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Create Todo</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { createTodo } from "../firebase";
import { reactive } from "vue";
export default {
  name: "Form",
  setup() {
    const form = reactive({ owner: "", todo: "" });

    const onSubmit = async () => {
      await createTodo({ ...form });
      form.owner = "";
      form.todo = "";
    };

    return { form, onSubmit };
  },
};
</script>

<style scoped>
.content {
  margin: 10px auto;
  padding: 100px;
}

.header {
  text-align: center;
}
</style>