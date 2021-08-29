<template>
  <li class="item">
    <div :class="`check ${select}`">
      <input @change="complete" type="checkbox" :checked="item.complete" />
    </div>
    <div class="info">
      <h3>{{ item.title }}</h3>
      <p>{{ item.content }}</p>
    </div>
    <div class="btn-group">
      <button @click="remove"><font-icon icon="trash" /></button>
    </div>
  </li>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['item'],
  setup(props, { emit }) {
    // SELECTED STYLE
    const select = computed(() => (props.item.complete ? 'select' : ''));

    // COMPLETE
    const complete = () => {
      emit('complete', props.item);
    };

    // DELETE
    const remove = () => {
      emit('remove', props.item);
    };

    return {
      select,
      complete,
      remove,
    };
  },
};
</script>

<style lang="scss" scoped>
$red: #ff553a;

.item {
  display: flex;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  padding: 0.5rem;

  &:hover {
    background-color: #1f1f1f;
  }

  &:hover .btn-group {
    visibility: visible;
    opacity: 1;
  }
}

.check {
  padding: 0.5rem;
}

.select {
  + .info h3 {
    color: #555;
    text-decoration: line-through;
  }

  + .info p {
    color: #555;
    text-decoration: line-through;
  }
}

.info {
  width: 100%;
  color: #ccc;

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.5rem 0 1rem 0.5rem;
    border-bottom: 1px solid #333;

    &:empty::before {
      content: 'No Input Title';
      color: #555;
    }
  }

  p {
    padding: 0.5rem;
    line-height: 1.5;

    &:empty::before {
      content: 'No Input Content';
      color: #555;
    }
  }
}

.btn-group {
  visibility: hidden;
  opacity: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  transition: 300ms ease-in-out;

  button {
    cursor: pointer;
    font-size: 1.2rem;
    border: none;
    color: $red;
    background-color: transparent;
    border-radius: 50%;
    padding: 0.5rem;

    &:hover {
      color: #fff;
      background-color: $red;
    }
  }
}
</style>
