<template>
  <div class="">
    <div class="Header">
      <nuxt-link
        class="Header-logo"
        to="/"
        style="visibility: inherit; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);"
      >
        <svg
          xmlns:dc="http://purl.org/dc/elements/1.1/"
          xmlns:cc="http://creativecommons.org/ns#"
          xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
          xmlns:svg="http://www.w3.org/2000/svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 502.23781 469.14694"
          class="svglogo-matheuscezar"
          data-v-58503ed7=""
          version="1.1"
          id="svglogo-matheuscezar"
        >
          <defs id="bluefilters">
            <filter
              id="filter9897"
              style="color-interpolation-filters:sRGB"
            >
              <feColorMatrix
                id="feColorMatrix9893"
                result="color1"
                values="88"
                type="hueRotate"
              />
              <feColorMatrix
                id="feColorMatrix9895"
                result="color2"
                values="1"
                type="saturate"
              />
            </filter>
            <filter
              id="filter9903"
              style="color-interpolation-filters:sRGB"
            >
              <feColorMatrix
                id="feColorMatrix9899"
                result="color1"
                values="88"
                type="hueRotate"
              />
              <feColorMatrix
                id="feColorMatrix9901"
                result="color2"
                values="1"
                type="saturate"
              />
            </filter>
            <filter
              id="filter9909"
              style="color-interpolation-filters:sRGB"
            >
              <feColorMatrix
                id="feColorMatrix9905"
                result="color1"
                values="88"
                type="hueRotate"
              />
              <feColorMatrix
                id="feColorMatrix9907"
                result="color2"
                values="1"
                type="saturate"
              />
            </filter>
          </defs>
          <g
            id="g8"
            style="fill:none;fill-rule:evenodd"
            transform="translate(40.517195,27.643557)"
          >
            <path
              d="M 260.36879,2.6281539 428.16195,305.34526 H 92.575612 Z"
              id="path4-6"
              class="svglogo_0"
              style="fill:#42b883;fill-opacity:1;fill-rule:evenodd;stroke:#42b883;stroke-width:5.28291321;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers;filter:url(#filter9897)"
            />
            <path
              d="m 240.54881,108.50195 167.0584,302.72856 H 73.490403 Z"
              id="path4-6-5"
              class="svglogo_1"
              style="opacity:1;fill:#35495e;fill-opacity:1;fill-rule:evenodd;stroke:#35495e;stroke-width:5.27143335;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;filter:url(#filter9903)"
            />
            <path
              d="M 160.8346,37.797524 328.62776,340.51463 H -6.9585632 Z"
              id="path4-6-7"
              class="svglogo_2"
              style="fill:#3c8171;fill-opacity:1;fill-rule:evenodd;stroke:#3c8171;stroke-width:5.28291368;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers;filter:url(#filter9909)"
            />
          </g>
        </svg>
      </nuxt-link>
      <div
        class="Header-nav"
        style="visibility: inherit; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);"
      >
        <nuxt-link to="/">
          <div class="Header-link Header-link--regular">Home</div>
        </nuxt-link>
        <nuxt-link to="/work">
          <div class="Header-link Header-link--regular">Work</div>
        </nuxt-link>
        <nuxt-link to="/about">
          <div class="Header-link Header-link--regular">About</div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<style>
  .Header-logo {
    width: 65px;
    opacity: 0 !important;
    display: none;
  }

  .App:not(._none) .Header-logo {
    opacity: 0 !important;
    display: inline-block;
  }

  .App:not(._none):not(._centering):not(._system-font) .Header-logo {
    opacity: 1 !important;
    display: inline-block;
  }

  ._logo .HeaderLogo-anim {
    position: absolute;
    width: 14px;
    height: auto;
    left: 25px;
    top: 29px;
  }

  ._logo .svglogo-matheuscezar #bluefilters {
    display: none;
  }

  .svglogo-matheuscezar path {
    fill: transparent !important;
    filter: none !important;
    stroke: rgb(0, 0, 0) !important;
    stroke-width: 12px !important;
  }

  .App:not(._none) .Header {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    position: relative;
    z-index: 10;
    user-select:
      none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    margin: 0;
    padding: 0 1rem;
    width: calc(100% - 2rem);
  }

  .App:not(._none) .Header-nav {
    opacity: 0;
    display: flex;
  }

  .App:not(._none) .Header-nav a,
  .App:not(._none).Header-nav span {
    position: relative;
  }

  .App:not(._none) .Header-link,
  .App:not(._none) .Header-nav svg {
    position: relative;
  }

  /* .App:not(._none) .Header-nav a {
    display: inline-block;
    margin-left: 3rem;
  } */
  .u-hitArea {
    background: transparent;
    background-size: 100%;
    cursor: pointer;
    z-index: 2;
  }

  /* --------- ._colors-contrast -------- */
  .App:not(._none):not(._centering):not(._system-font):not(._spacing):not(._colors-contrast) .Header * {
    text-decoration: none;
  }

  .App:not(._none):not(._centering):not(._system-font):not(._spacing) .Header .Header-link {
    color: #fff;
    opacity: 0.6;
  }

  .App:not(._none):not(._centering):not(._system-font):not(._spacing) .Header .Header-link:hover {
    color: #fff;
    opacity: 1;
  }

  .App:not(._none):not(._centering):not(._system-font):not(._spacing) .Header .nuxt-link-exact-active .Header-link {
    opacity: 1;
    font-weight: bold;
  }

  .App:not(._none):not(._centering):not(._system-font):not(._spacing) .Header .svglogo-matheuscezar path {
    stroke:
      rgb(255, 255, 255) !important;
    stroke-width: 12px !important;
  }

  .App:not(._none) .Header {
    max-width: 1500px;
    margin: 0 auto;
    top: 60px;
  }

  .App:not(._none) .nuxt-link-active {
    opacity: 1;
  }

  .App:not(._none) .Header-nav a {
    display: inline-block;
    margin-left: 2em;
  }

  .App:not(._none) .Header {
    width: calc(100% - 3em);
  }

  .App._custom-font .Header-link {
    font-size: inherit;
  }

</style>
