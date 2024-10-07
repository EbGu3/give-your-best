<template>
  <section
    class="text-container-prin"
  >
    <div class="text">
      <q-item class="text-container">
        <Transition 
          appear
          name="slide-fade"
        >
          <q-item-label>
            Cada día es un regalo. Motivarnos a dejar el corazón en 
            cada acción y enriquecer la vida de quienes amamos y nos rodean
            debe volverse nuestro motivo...
          </q-item-label>
        </Transition>
      </q-item>
    </div>

    <div>
      <q-item>
        <q-item-label class="thanks-message">
          Thanks. God
        </q-item-label>
      </q-item>
    </div>
 
    <div
      class="thanks-people"
      id="thanks-people"
    >
      <q-scroll-area :style="`height: 200px; max-width: ${withScroll}px;`">
        <div class="row no-wrap just-cent">
          <div v-for="(message, index) in messages" :key="index" style="width: 150px" class="q-pa-sm">
            <section
              class="card-thanks"
            >
              <simple-appear>
                <section>
                  <div class="person">
                    <span class="name">{{ message.person }}</span>
                  </div>
                  
                  <p class="message-text">
                      {{ message.text }}
                  </p>
                </section>
              </simple-appear>
            </section>
          </div>
        </div>
      </q-scroll-area>
    </div>
    
  </section>
</template>

<script setup>
import SimpleAppear from 'src/components/Transition/SimpleAppear.vue';
import { ref, onMounted } from 'vue'


onMounted(() => {
  watchSize()
  window.addEventListener('resize', watchSize)
})

const withScroll = ref(100)
const watchSize = () => {
  const element = document.getElementById('thanks-people');
  withScroll.value = element.clientWidth
};

const messages = ref([
  {
    person: 'Mamá',
    text: 'Me brindas tu apoyo, amor y consejos. que cada día me transforman'
  },
  {
    person: 'Rubiely',
    text: 'Tu amor me ha hecho mucho bien. Llenas de alegría mi corazón. Tú eres el mejor regalo.'
  },
  {
    person: 'Hermano, Hermana',
    text: 'Son mis amigos y consejeros, hacen un trabajo maravilloso como hermanos.'
  }
])

</script>

<style scoped>

.text-container-prin {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 60% 5% 35%;
}

.text {
  display: flex;
  align-items: center;
  margin-top: 4rem;
  text-align: center;
  font-size: 0.8rem;
  padding: 0.5rem;
}

.text-container {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  letter-spacing: 0.2rem;
  color: var(--primary) !important;
  padding: 3rem;
}

.slide-fade-enter-active {
  transition: all 2s ease-out;
  color: var(--secundary) !important;
}

.slide-fade-leave-active {
  transition: all 2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
  color: var(--secundary) !important;
}

.thanks-message {
  color: #8e8d8d;
  margin-left: 1rem;
}

@media screen and (min-width: 420px) {
  .thanks-people {
    padding-right: 2rem;
  }
}

.thanks-people {
  width: 100%;
  height: 100%;
  display: inline;
  padding-left: 2rem;
  justify-content: center;
}

.person {
  color: var(--color-text-2);
  font-size: 0.7rem;
  display: flex;
  text-align: center;
  width: 100%;
  background: var(--primary);
  padding-bottom: 0.5rem;
  border-radius: 1rem;
}

.name {
  margin-left: 1rem;
  margin-top: 0.5rem;
}

.message-text {
  font-size: 0.7rem; 
  text-align: center;
  padding: 1rem;
  color: var(--secundary);
}

.just-cent {
  justify-content: center;
}

</style>