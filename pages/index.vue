<template>
  <section>
    <div>
      <div class="copy-wrapper">
        <div class="copy">
          <span class="copy-text"> I'm </span>
          <a class="copy-link" href="/about">
            <span class="copy-text">Matheus Cezar</span>
          </a>
          <span class="copy-text">. A vegan Front-End developer based in Itajai, Brazil. My</span>
          <a href="/work" class="copy-link">
            <span class="copy-text">works</span>
          </a>
          <span class="copy-text">include websites, intranets, and real-time dashboards used by over 2 million people
            monthly. <br>I can tackle everything from PSD to perfect-handcrafted HTML/CSS, to complex web applications
            leveraging the lastest Javascript cool techs like React and</span>
          <a href="#" class="copy-link">
            <span class="copy-text">Vue</span>
          </a>. <span class="copy-text"> <br>If you have a challenging UI to come to life, a web project that needs
            attention and caring, or the highest enterprise standards requirements to met,</span>
          <a href="/about" class="copy-link">
            <span class="copy-text">contact-me</span>
          </a>
        </div>
      </div>
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
    },
  }

</script>
<style>
  .copy-link-bg {
    position: fixed;
    z-index: 0;
    opacity: 0;
    top: 0;
    left: 0;
    height: 100%;
    transform: none;
    width: 100vw;
    filter: grayscale(1);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(http://unsplash.it/1200x800);
  }

  .copy-link-bg:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to bottom right, #002f4b79, #dc4325e1);
    opacity: .6;
  }

  .copy-link-bg.visible {
    opacity: 1;
  }

  .copy-link>div {
    position: relative;
    display: inline-block;
  }

  .copy-link-image {
    position: absolute;
    opacity: 0.8;
  }

  .App:not(._none) .copy {
    width: calc(100% - 3rem);
    max-width: 1200px;
  }

  /* .copy-link-image {
    z-index: -1;
  } */
  .intro__line {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }

</style>
