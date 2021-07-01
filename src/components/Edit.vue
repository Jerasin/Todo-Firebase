<template>
  <div id="form">
    <div class="container">
      <h1 class="header">Edit Todos {{ todoId }}</h1>

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
          <button type="submit" class="btn btn-primary">Edit</button>
          <router-link :to="`/`"
            ><button type="submit" class="btn btn-warning">
              Cancel
            </button></router-link
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { updateTodo , getTodoById } from "../firebase";
import { useRouter, useRoute } from "vue-router";
import { reactive, computed, onMounted } from "vue";
export default {
  name: "Edit",
  setup() {
    const form = reactive({ owner: "", todo: "" });
    const router = useRouter();
    const route = useRoute();
    const todoId = computed(() => route.params.id);

    onMounted(async () => {
      const todo = await getTodoById(todoId.value);
      console.log(todo, todoId.value);
      form.owner = todo.owner;
      form.todo = todo.todo;
    });

    const onSubmit = async () => {
      console.log(todoId.value);
      await updateTodo(todoId.value, { ...form });
      router.push("/");
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