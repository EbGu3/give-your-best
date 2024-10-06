<template>
  <q-page 
    class="architecture"
  >
    <left-menu></left-menu>
    
    <section>
    </section>
  </q-page>
</template>

<script setup>

import LeftMenu from 'src/components/Menu/LeftMenu.vue';

defineOptions({
  name: 'IndexPage'
});
</script>

<style scoped>

.architecture {
  display: grid;
  grid-template-columns: 0.1fr 4fr;
}

</style>
