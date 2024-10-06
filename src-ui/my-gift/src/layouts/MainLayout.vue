<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar
        class="toolbar"
      >
        <q-item>
          <q-item-label class="by" caption>by</q-item-label>
          <q-item-label class="my-name" caption>Jared. G</q-item-label>
        </q-item>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'


defineOptions({
  name: 'MainLayout'
})

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>


<style scoped>

.toolbar {
  background: var(--secundary);
  display: flex;
  width: 100%;
  justify-content: right;
}

.by {
  margin-right: 0.6rem;
  margin-top: 0.8rem;
  color: var(--color-text-1);
  font-size: 0.6rem;
  letter-spacing: 0.3rem;
}

.my-name {
  margin-top: 0.4rem !important;
  color: var(--color-text-1);
  letter-spacing: 0.2rem;
}

</style>