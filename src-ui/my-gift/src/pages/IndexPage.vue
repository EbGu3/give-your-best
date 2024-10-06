<template>
  <q-page 
    class="architecture"
  >
    <left-menu></left-menu>
    
    <section>
      <!--Vista principal-->
      <web-view v-if="isSizeLaptop"></web-view>
      <text-principal v-else></text-principal>
    </section>
  </q-page>
</template>

<script setup>

import WebView from 'src/components/Options/Inicio/WebView.vue';
import TextPrincipal from 'src/components/Options/Inicio/TextPrincipal.vue';
import LeftMenu from 'src/components/Menu/LeftMenu.vue';
import { ref, onMounted } from 'vue'

defineOptions({
  name: 'IndexPage'
});

const isSizeLaptop = ref(true)
onMounted(() => {
  window.addEventListener('resize', watchSize)
})

const watchSize = () => {
  const maxWidth = 620
  isSizeLaptop.value = window.innerWidth > maxWidth
}

</script>

<style scoped>

.architecture {
  display: grid;
  grid-template-columns: 0.1fr 4fr;
}

</style>
