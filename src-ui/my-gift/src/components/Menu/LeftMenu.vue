<template>
  <Transition
    appear
    name="simple-appear"
  >
    <section
      class="menu-left"
    > 
      <q-item 
        class="principal">
        <q-icon 
          name="las la-campground"
          class="icon icon-principal"
          size="sm"
        >
          <tool-tip-e :text="'Inicio'"></tool-tip-e>
        </q-icon>
        <div class="line"></div>
      </q-item>


      <div class="options">
        <q-icon 
          size="sm"
          name="las la-book"
          class="icon-option"
        >
        <tool-tip-e :text="'Contenido'"></tool-tip-e>
        </q-icon>
      </div>
    </section>
  </Transition>
</template>

<script setup>
import ToolTipE from '../Help/ToolTipE.vue';

</script>

<style scoped>

.simple-appear-enter-active,
.simple-appear-leave-active {
  transition: opacity 3s ease;
}

.simple-appear-enter-from,
.simple-appear-leave-to {
  opacity: 0;
}

.menu-left {
  background: var(--secundary);
  margin: 2rem 0rem 2rem 1rem;
  border-radius: 2rem;
  display: grid;
  grid-template-rows: 20% 80%;
  filter: drop-shadow(2px 2px 2px black);
}

.principal {
  display: flex;
  flex-direction: column;
}

.icon-principal {
  margin-left: 0.3rem;
  margin-top: 1rem;
}

.line {
  margin-top: 0.5rem;
  width: 2.2rem;
  height: 0.1rem;
  background: var(--color-text-2) !important;
}

.options {
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.icon-option {
  background: var(--color-text-2);
  margin-left: auto;
  margin-right: auto;
  padding: 0.3rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
}

</style>