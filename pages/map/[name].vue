<script setup lang="ts">
import { formatMapName, getSelectedMap } from '~/scripts/util';
definePageMeta({
  layout: 'default',
});
const route = useRoute();
const fallbackMap: string = 'roslyn-peninsula';
const selectedMap: string = (route.params.name as string) ?? fallbackMap;
const formattedMapName = formatMapName(selectedMap);
</script>

<template>
  <main>
    <section>
      <h1>Maps Details</h1>
      <h2>{{ formattedMapName }}</h2>
    </section>
  </main>
</template>
