<script setup>
import { navs } from '@/scripts/util';
</script>

<template>
  <section>
    <nav>
      <RouterLink
        v-for="nav in navs"
        v-bind:key="nav.name"
        :to="nav.path"
        :tabindex="1"
        class="transition"
        >{{ nav.name }}
      </RouterLink>
    </nav>
  </section>
</template>
