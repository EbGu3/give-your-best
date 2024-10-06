<template>
  <q-tooltip
    anchor="center end" self="center start"
  >
    <span class="text">
      {{ text }}
    </span>
  </q-tooltip>
</template>

<script setup>

const props = defineProps({
  text: String
})

</script>


<style scoped>

.text {
  text-transform: uppercase;
  font-weight: bold;
}

</style>