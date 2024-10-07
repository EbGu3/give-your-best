<template>
  <section v-if="store.isEnableContentView == 1">
    <q-item>
      <q-item-label>Preparando :)</q-item-label>
    </q-item>
  </section>
</template>

<script setup>
import { store } from 'src/composables/LeftMenu/storeView';

</script>