<template>
  <section 
    class="menu-top"
    v-if="isMiniMenuTop == 1"
  >
      <q-item
        v-for="(topic, index) in topics" :key="index"
        class="topic"
        clickable
      >
        <q-icon
          class="icon-topic"
          :name="topic.icon"
        ></q-icon>
        <q-item-label
          caption
          class="topic-name"
        >
          {{ topic.name }}
          <q-tooltip>{{ topic.tooltip }}</q-tooltip>
        </q-item-label>
      </q-item>
  </section>
  <section
    v-else
    class="menu-top"
  >
    <SimpleAppear>
      <q-item
        clickable
      >
        <q-icon
          name="las la-bars"
          class="icon-multiple"
        >
        </q-icon>
      </q-item>
    </SimpleAppear>
  </section>
</template>

<script setup>
import SimpleAppear from '../Transition/SimpleAppear.vue';
import { useSizePage } from 'src/composables/SizePage/useSizePage';
import { onMounted } from 'vue';


onMounted(() => {
  miniMenuTop() 
})

const topics = [
  {
    name: 'Comunicación',
    icon: 'las la-heart',
    tooltip: 'Comunicación que permite dar desde el corazón'
  },
  {
    name: 'Iglesia',
    icon: 'las la-bible',
    tooltip: 'Dios nos habla'
  },
  {
    name: 'Programación',
    icon: 'las la-code',
    tooltip: 'Aprende algo nuevo'
  }
]

const {
  miniMenuTop,
  isMiniMenuTop
} = useSizePage()


</script>

<style scoped>

.menu-top {
  background: var(--color-text-1);
  height: 3.5rem !important;
  margin: 2rem 1.5rem 2rem 1.5rem;
  filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.085));
  border-radius: 1rem;
  display: flex;
  justify-content: flex-end;
}

.topic-name {
  margin-top: auto;
  margin-bottom: auto;
  letter-spacing: 2px;
}

.topic-name:hover {
  font-size: 0.8rem;
  color: var(--primary)
}


.icon-topic {
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 1rem;
  color: var(--primary)
}

.icon-multiple {
  background: var(--primary);
  margin-top: auto;
  margin-bottom: auto;
  font-size: 1.5rem;
  padding: 0.5rem;
  color: var(--color-text-1);
  border-radius: 2rem;
}

</style>