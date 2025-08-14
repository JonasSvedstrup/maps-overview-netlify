<script setup lang="ts">
import type { MapsData } from '@/scripts/types';
import { Connections, formatMapName, formatNumer } from '@/scripts/util';
import rawMapsData from '../data/maps.json';
const route = useRoute();
const fallbackMap: string = 'roslyn-peninsula';
const selectedMap: string = (route.params.name as string) ?? fallbackMap;
const formattedMapName = formatMapName(selectedMap);

const mapData: MapsData = rawMapsData.filter(
  map => map.name == formatMapName(selectedMap)
)[0];

const littleHamlet = mapData.milestones[0];
const megalopolis = mapData.milestones[mapData.milestones.length - 1];

let connectionsString = '';
Object.keys(Connections).forEach(connection => {
  // @ts-expect-error no need for a type of this.
  if (mapData.connections[connection.toLowerCase()]) {
    connectionsString += `${connection}, `;
  }
});

if (connectionsString.endsWith(', ')) {
  connectionsString = connectionsString.substring(
    0,
    connectionsString.length - 2
  );
}
</script>

<template>
  <h3>Details</h3>
  <p>
    Name: {{ formattedMapName }}<br />
    Theme: {{ mapData.theme }}<br />
    DLC: {{ mapData.dlc }}<br />
    Buildable area: {{ mapData.buildableArea }}%<br />
  </p>
  <h4>Connections:</h4>
  <p>
    {{ connectionsString }}
  </p>
  <h4>Milestones</h4>
  <p>
    Little Hamlet: {{ formatNumer(littleHamlet) }}<br />
    Megalopolis: {{ formatNumer(megalopolis) }}
  </p>
</template>

<script lang="ts"></script>
