<script setup lang="ts">
import { mapViews, themeViews } from '@/scripts/util';
import { useModalStore } from '@/stores/modal';
import { ref } from 'vue';
import rawMapsData from '../data/maps.json';

const activeView = ref('top');
const activeViewDlc = ref('All');
const activeViewTheme = ref('All');
const mapsDataFiltered = ref(rawMapsData);

const dlcViews: string[] = ['All'];

const modalStore = useModalStore();

function handleChangeView(newView: string) {
  activeView.value = newView;
}

function handleChangeViewTheme(newView: string) {
  activeViewTheme.value = newView;

  mapsDataFiltered.value = rawMapsData.filter(map => map.hasImages);
  if (activeViewDlc.value !== 'All') {
    mapsDataFiltered.value = mapsDataFiltered.value.filter(
      map => map.dlc === activeViewDlc.value
    );
  }

  if (newView !== 'All') {
    mapsDataFiltered.value = mapsDataFiltered.value.filter(
      map => map.theme === newView
    );
  }
}

function handleChangeViewDlc(newView: string) {
  activeViewDlc.value = newView;

  mapsDataFiltered.value = rawMapsData.filter(map => map.hasImages);
  if (activeViewTheme.value !== 'All') {
    mapsDataFiltered.value = mapsDataFiltered.value.filter(
      map => map.theme === activeViewTheme.value
    );
  }

  if (newView !== 'All') {
    mapsDataFiltered.value = mapsDataFiltered.value.filter(
      map => map.dlc === newView
    );
  }
}

const handleShowImage = (mapShort: string) => {
  document.body.classList.add('modal-open');
  modalStore.setMapShort(mapShort);
  modalStore.setMapView(activeView.value);
  modalStore.showModal();
};

mapsDataFiltered.value = rawMapsData.filter(map => map.hasImages);
mapsDataFiltered.value.forEach(map => {
  if (!dlcViews.includes(map.dlc)) {
    dlcViews.push(map.dlc);
  }
});
</script>

<template>
  <main id="main-compare">
    <section>
      <h1>Maps Compare</h1>
      <h2>Cities Skylines</h2>
      <p>Here you can compare maps by screenshots taken in the game.</p>
    </section>
    <section>
      <p>Filter by Theme</p>
      <div class="tablist">
        <TabsList
          :dataList="themeViews"
          :activeView="activeViewTheme"
          @change-view="handleChangeViewTheme"
        />
      </div>
    </section>
    <section>
      <p>Filter by DLC</p>
      <div class="tablist">
        <TabsList
          :dataList="dlcViews"
          :activeView="activeViewDlc"
          @change-view="handleChangeViewDlc"
        />
      </div>
    </section>
    <section>
      <p>Filter by Screenshot</p>
      <div class="tablist">
        <TabsList
          :dataList="mapViews"
          :activeView="activeView"
          @change-view="handleChangeView"
        />
      </div>
    </section>
    <section class="full-width">
      <TabsViews
        :dataList="mapsDataFiltered"
        :activeView="activeView"
        :activeViewDlc="activeViewDlc"
        @handle-show-image="handleShowImage"
      />
    </section>
  </main>
</template>
