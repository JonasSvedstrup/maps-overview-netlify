<script setup lang="ts">
import { formatMapName, getSelectedMap } from "~/scripts/util";
definePageMeta({
  layout: "default",
});
const fallbackMap: string = "roslyn-peninsula";
const selectedMap: string = getSelectedMap() ?? fallbackMap;
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
