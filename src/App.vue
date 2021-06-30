<template>
  <div id="app">
   <Form />
   <Todos />
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import Todos from '@/components/Todos.vue'
export default {
  name: "app",
  components:{
    Form,
    Todos
  }
  
};
</script>

<style>

</style>