<template>
  <section>
    <Header />
    <Footer />
    <h1>home</h1>
    <Slider />
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
</style>
