<template>
    <div class="pagination">
      <button
        :disabled="offset <= 0"
        @click="previousPage"
        class="pagination-button"
      >
        &lt;
      </button>
      <span class="pagination-info">Page: {{ page }}</span>
      <button
        :disabled="offset >= maxOffset"
        @click="nextPage"
        class="pagination-button"
      >
        &gt;
      </button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineProps, defineEmits, computed } from 'vue';
  
  const props = defineProps<{
    offset: number;
  }>();
  
  const emit = defineEmits(['update:offset']);
  
  const maxOffset = 1300;

  const page = computed(() => (props.offset) / 10 + 1)
  
  const nextPage = () => {
    if (props.offset < maxOffset) {
      const newOffset = props.offset + 10;
      emit('update:offset', Math.min(newOffset, maxOffset));
    }
  };
  
  const previousPage = () => {
    if (props.offset > 0) {
      const newOffset = props.offset - 10;
      emit('update:offset', Math.max(newOffset, 0));
    }
  };
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .pagination button {
    padding: .5rem 1rem;
    cursor: pointer;
    background: #ffffff;
    outline: none;
    border: none;
  }
  
  .pagination-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .pagination-info {
    font-size: 16px;
  }
  </style>
  