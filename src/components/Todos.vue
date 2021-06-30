<template>
  <div id="todos" class="container">
    <h1 class="header">Todos</h1>
    <div class="content">
      <div class="card mt-4">
        <table class="table m-0">
          <thead>
            <tr>
              <th scope="col">Owner</th>
              <th scope="col">Todo</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="{ id, owner, todo } in todos" :key="id">
              <td>
                {{ owner }}
              </td>
              <td>
                {{ todo }}
              </td>
              <td>
                  <button class="btn btn-danger" @click="deleteTodo(id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { todoLoading, deleteTodo } from "../firebase";
export default {
  name: "Todos",
  setup() {
    const todos = todoLoading();
    return { todos, deleteTodo };
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