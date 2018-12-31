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
  import VueSliderComponent from '~/components/VueSliderComponent.vue'
  export default {
    components: {
      Header,
      Footer,
      VueSliderComponent
    }
  }

</script>
<style>
</style>
