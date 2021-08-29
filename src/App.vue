<template>
  <div class="app">
    <div class="container">
      <form @submit.prevent="addList">
        <div class="form-control">
          <input v-model="userInput.title" type="text" placeholder="Title" />
          <textarea v-model="userInput.content" placeholder="Todo List" />
        </div>
        <div class="form-btn">
          <button @click="reset" type="button">Cancel</button>
          <button type="submit">Ok</button>
        </div>
      </form>
      <h2>My List</h2>
      <ul>
        <ListItem
          v-for="item in list"
          :key="item.id"
          :item="item"
          @complete="complete"
          @remove="remove"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import ListItem from './components/ListItem.vue';

export default {
  components: {
    ListItem,
  },
  setup() {
    const list = ref([]);

    // CREATE
    let id = 1;
    const userInput = reactive({
      title: '',
      content: '',
      complete: false,
    });

    const addList = () => {
      list.value.unshift({ id, ...userInput });
      id += 1;
      userInput.title = '';
      userInput.content = '';
    };

    // COMPLETE
    const complete = (item) => {
      list.value = [
        ...list.value.filter((ele) => ele.id !== item.id),
        { ...item, complete: !item.complete },
      ];
      console.log(list.value);
    };

    // DELETE
    const remove = (item) => {
      list.value = list.value.filter((ele) => ele.id !== item.id);
    };

    // RESET
    const reset = () => {
      userInput.title = '';
      userInput.content = '';
    };

    return {
      list,
      userInput,
      addList,
      complete,
      remove,
      reset,
    };
  },
};
</script>

<style lang="scss" scoped>
$blue: #0b85fe;

.app {
  padding-top: 3rem;
  min-height: 100vh;
}

.container {
  max-width: 500px;
  margin: 0 auto;

  form {
    margin-bottom: 1rem;
  }

  h2 {
    padding: 0 0.5rem;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  ul {
    padding: 0 0.5rem;
  }
}

.form-control {
  display: flex;
  flex-flow: column nowrap;
  padding: 0.5rem;
  background-color: #1f1f1f;
  overflow: hidden;
  border-radius: 0.5rem;
  margin-bottom: 1rem;

  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #555;
    color: #fff;
    background-color: transparent;
    padding: 1rem 0.5rem;
    font-size: 1.2rem;
  }

  textarea {
    width: 100%;
    border: none;
    resize: none;
    margin: 0;
    color: #fff;
    background-color: transparent;
    padding: 1rem 0.5rem;
    font-size: 1.2rem;

    &:focus {
      outline: none;
    }
  }
}

.form-btn {
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;

  button {
    cursor: pointer;
    color: $blue;
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
    font-weight: 500;
  }
}
</style>
