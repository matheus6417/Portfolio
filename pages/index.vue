<template>
  <section>
    <div>
      <div class="copy-wrapper">
        <h1 class="copy">Hi, thi is <a
            class="copy-link"
            href="#"
          >
            <div style="position:relative;display:inline-block;"> Matheus Cezar</div>
          </a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <a
            href="#"
            class="copy-link"
          >
            <div style="position:relative;display:inline-block;">Workqs</div>
          </a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut <a
            href="#"
            class="copy-link"
          >
            <div style="position:relative;display:inline-block;">Interactigon</div>
          </a> aliquip ex ea commodo consequat. </h1>
      </div>
    </div>
    <div class="slider-wrapper">
      <Slider />
    </div>
  </section>
</template>
<script>
  import Slider from '~/components/Slider.vue'
  export default {
    components: {
      Slider
    }
  }

</script>
<style>
</style>
