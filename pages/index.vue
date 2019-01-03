<template>
  <section>

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
  .slider-wrapper {
    position: fixed;
    bottom: 150px;
    width: 90%;
    margin-left: 50%;
    transform: translateX(-50%)
  }

</style>
