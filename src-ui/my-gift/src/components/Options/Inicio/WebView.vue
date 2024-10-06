<template>
  <section 
    class="architecture-web"
  >
    <text-principal></text-principal>

    <div class="img-container">
      <img 
        src="statics/img/ir-image.jpg"
        class="img"
      >
    </div>
  </section>
</template>

<script setup>
import TextPrincipal from './TextPrincipal.vue';

</script>

<style scoped>

.architecture-web {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
}

.img-container {
  margin: auto;
  justify-content: center;
  display: flex;
}

.img {
  filter: brightness(2);
  box-shadow: 1px 0px 7px black;
}

@media screen and (min-width: 620px) {
  .img {
    width: 80%;
    border-radius: 2rem;
  }
}

@media screen and (min-width: 720px) {
  .img {
    width: 70%;
    border-radius: 2rem;
  }
}

</style>