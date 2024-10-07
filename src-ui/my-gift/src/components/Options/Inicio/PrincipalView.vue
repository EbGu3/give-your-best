<template>
  <section v-if="store.isEnablePrincipalView == 1">
    <web-view v-if="isMaxWindow"></web-view>
    <text-principal v-else></text-principal>
  </section>
</template>

<script setup>

import WebView from 'src/components/Options/Inicio/WebView.vue';
import TextPrincipal from 'src/components/Options/Inicio/TextPrincipal.vue';
import { useSizePage } from 'src/composables/SizePage/useSizePage';
import { onMounted } from 'vue';
import { store } from 'src/composables/LeftMenu/storeView';

onMounted(() =>  {
  updateSize()
})

const {
  isMaxWindow,
  updateSize
} = useSizePage()


</script>
