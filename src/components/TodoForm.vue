<template>
  <div>
    <form @submit.prevent="submit">
      <input
        type="text"
        placeholder="Title"
        name="title"
        v-model="title"
      />

      <textarea
        placeholder="Additional description"
        name="description"
        cols="30"
        rows="10"
        v-model="description"
      />

      <button>Add New Todo</button>
    </form>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue';
import { useStore } from 'vuex';

export default {

  setup() {
    const store = useStore();

    const title = ref('');
    const description = ref('');

    const submit = () => {
      const newTodo = {
        id: store.getters['todo/todoListLength'] + 1,
        title: title.value,
        description: description.value,
        finished: false,
      };

      store.dispatch('todo/addTodo', newTodo);

      title.value = '';
      description.value = '';
    };

    return {
      submit,
      title,
      description,
    }
  },

}
</script>

<style lang="scss">

div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  width: 100%;
  max-width: 500px;
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 10px;

  input[name="title"] {
    padding: 2px 10px;
  }

  textarea[name="description"] {
    padding: 5px 10px;
    resize: none;
  }
}

</style>