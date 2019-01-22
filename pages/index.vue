<template>
  <section>
    <div>
      <div class="copy-wrapper">
        <h1 class="copy"> I'm <a
            class="copy-link"
            href="/about"
          >
            <div>Matheus Cezar</div>
          </a>. A vegan Front-End developer based in Itajai, Brazil. My <a
            href="/work"
            class="copy-link"
            id="test"
          >
            <div> works</div>
          </a> include websites, intranets, and real-time dashboards used by over 2 million people monthly. <br>I can
          tackle everything from PSD to perfect-handcrafted <a
            href="#"
            class="copy-link"
          >
            <div>HTML/CSS</div>
          </a>, to complex web applications leveraging the lastest <a
            href="#"
            class="copy-link"
          >
            <div>Javascript</div>
          </a> cool techs like React and <a
            href="#"
            class="copy-link"
          >
            <div>Vue</div>
          </a>. <br>If you have a challenging UI to come to life, a web project that needs attention and caring, or the
          highest enterprise standards requirements to met, <a
            href="/about"
            class="copy-link"
          >
            <div>contact me now!</div>
          </a></h1>
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

</style>
