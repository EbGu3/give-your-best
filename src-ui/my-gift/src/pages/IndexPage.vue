<template>
  <q-page 
    class="architecture"
  >
    <left-menu></left-menu>

    <!--Vista principal-->
    <principal-view></principal-view>
    <content-view></content-view>
  </q-page>
</template>

<script setup>

import LeftMenu from 'src/components/Menu/LeftMenu.vue';
import PrincipalView from 'src/components/Options/Inicio/PrincipalView.vue';
import ContentView from 'src/components/Options/Content/ContentView.vue';

defineOptions({
  name: 'IndexPage'
});


</script>

<style scoped>

.architecture {
  display: grid;
  grid-template-columns: 0.1fr 4fr;
  background: var(--color-text-3);
}

</style>
