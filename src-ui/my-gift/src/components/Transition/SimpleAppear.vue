<template>
  <Transition
    appear
    name="simple-appear"
  >
    <slot></slot>
  </Transition>
</template>

<style scoped>

.simple-appear-enter-active,
.simple-appear-leave-active {
  transition: opacity 3s ease;
}

.simple-appear-enter-from,
.simple-appear-leave-to {
  opacity: 0;
}

</style>