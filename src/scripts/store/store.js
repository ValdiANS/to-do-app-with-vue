import { createStore } from 'vuex';
import CONFIG from '../global/config';
import TodoData from '../data/TodoData';

const todo = {
  namespaced: true,

  state() {
    return {
      all: TodoData.getTodo(CONFIG.TODO_STORAGE_KEY) || [],
    };
  },

  mutations: {
    setTodo(state, todo) {
      state.all = todo;
    },

    setTodoFinished(state, todo) {

    },
  },

  actions: {
    addTodo(ctx, todo) {      
      TodoData.storeTodo(CONFIG.TODO_STORAGE_KEY, todo);
      const todoList = TodoData.getTodo(CONFIG.TODO_STORAGE_KEY);
      
      ctx.commit('setTodo', todoList);
    }
  },

  getters: {
    finishedList(state) {
      
    },

    todoListLength(state) {
      return state.all.length;
    }
  }
};

export const store = createStore({
  modules: {
    todo,
  },
})
