<template>
  <section 
    v-if="store.isEnableContentView == 1"
    class="skelet-main"
  >
    <TopMenu :style="`height:${topMenuHeight}px;`"></TopMenu>

    <div :style="`max-height:${bodyMenuHeight}px;background: black;overflow:auto;`">
      <div v-for="n in 40" :key="n">hola</div>
    </div>
    <div :style="`height:${breadMenuHeight}px;background: black;`"></div>
  </section>
</template>

<script setup>

import TopMenu from 'src/components/Menu/TopMenu.vue';
import { store } from 'src/composables/LeftMenu/storeView';
import { useSizePage } from 'src/composables/SizePage/useSizePage';
import { onMounted } from 'vue';

onMounted(() =>  {
  updateHeigthContent()
})


const {
  updateHeigthContent,
  topMenuHeight,
  bodyMenuHeight,
  breadMenuHeight
} = useSizePage()

</script>

<style scoped>

.skelet-main {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 20% 70% 5% 5%;
}

</style>