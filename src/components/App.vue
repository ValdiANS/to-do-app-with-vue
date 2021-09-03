<template>
  <main>
    <todo-form />

    <h1>Todo's List</h1>
  </main>
</template>

<script>
import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';

export default {
  components: {
    TodoForm,
    TodoList,
  },
}
</script>

<style lang="scss" scoped>

main {
  width: 100%;
  max-width: 800px;
  margin: 50px auto;
}

h1 {
  text-align: center;
  margin: 30px 0;
  border-bottom: 2px solid black;
}

</style>