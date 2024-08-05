<template>
  <div :class="`type ${type.name}`">{{ type.name }}</div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Type } from "../interfaces/pokemon";
defineProps({
  type: { required: true, type: Object as PropType<Type> },
});
</script>

<style scoped>
.type {
  display: inline-block;
  border-radius: 0.9375em;
  color: #fff;
  text-transform: uppercase;
  padding: 0.5em;
  display: flex;
  flex-wrap: wrap;
  font-size: 0.9375em;
  gap: 0.1875em;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
</style>
