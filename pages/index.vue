<template>
  <section>
    <Header />
    <Footer />
    <div class="slider-wrapper">
      <Slider />
    </div>
  </section>
</template>
<script>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  import Slider from '~/components/Slider.vue'
  export default {
    components: {
      Header,
      Footer,
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
