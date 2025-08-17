<script setup>
import GridTableMaps from '@/components/GridTableMaps.vue';
import {
  getGridTableMapsOverviewColumns,
  getGridTableMapsOverviewRows,
} from '@/scripts/gridTable';
import rawMapsData from '../data/maps.json';
definePageMeta({
  layout: 'default',
});
</script>

<template>
  <main id="main-overview">
    <section>
      <h1>Maps Overview</h1>
      <h2>Cities Skylines</h2>
      <p>
        Welcome to <a href="">Cities Skylines</a> Maps Overview, a page where
        you can inspect and compare maps before deciding where to build your
        next city. This site includes a list of all the maps in Cities
        Skylines.<br />
      </p>
      <p>
        This includes the downloadable content: Snowfall, Natural Disasters,
        Mass Transit, Green Cities, Parklife, Industries, Campus, Sunset Harbor,
        Airports, Plazas and Promenades, Financial Districts, Hotels & Retreats,
        Map Pack 1, Map Pack 2, Map Pack 3
      </p>
    </section>
    <section>
      <h2>Maps list</h2>
      <p>
        Screenshots have only been taken and prepared for the maps with Yes in
        the column 'Img'.
      </p>
    </section>
    <section class="full-width">
      <GridTableMaps
        :columns="getGridTableMapsOverviewColumns()"
        :height="514"
        :rows="getGridTableMapsOverviewRows(rawMapsData)"
      />
    </section>
  </main>
</template>
