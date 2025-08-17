<script setup lang="ts">
import { formatMapShort, pickSelectedMap } from '@/scripts/util';
import rawMapsData from '../data/maps.json';

console.log({ rawMapsData });

const mapList = rawMapsData
  .map(map => {
    return map.name;
  })
  .sort();

console.log({ mapList });

const onChange = (event: Event) => {
  const target = event.target as HTMLButtonElement;

  if (target) {
    pickSelectedMap(formatMapShort(target.value));
  }
};

defineProps<{
  selectedMap: string;
}>();
</script>

<template>
  <select class="select" @change="onChange($event)">
    <option
      v-for="name in mapList"
      v-bind:key="name"
      :selected="formatMapShort(name) === selectedMap"
    >
      {{ name }}
    </option>
  </select>
</template>
