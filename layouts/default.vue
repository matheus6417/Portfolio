<template>
  <div class="App u-fullSize">
    <nuxt />
  </div>
</template>
<style>
  /*! CSS Used from: http://thieb.co/build/styles.css */
  .u-hidden {
    pointer-events: none;
  }

  :not(body) {
    background-repeat: no-repeat;
  }

  a {
    text-decoration: none;
  }

  a,
  button {
    outline: 0;
  }

  .u-fullParent,
  .u-middle--abs {
    top: 0;
    position: absolute;
  }

  html {
    border-collapse: collapse;
    line-height: 1;
  }

  * {
    border-collapse: inherit;
  }

  :not(body) {
    background-position: 50%;
    background-size: cover;
  }

  body,
  html {
    padding: 0;
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li,
  p {
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
  }

  .u-hidden {
    visibility: hidden;
  }

  .u-visuallyHidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    border: 0;
    color: #757575;
  }

  .u-fullParent,
  .u-fullSize {
    width: 100%;
    height: 100%;
  }

  .u-fullParent {
    left: 0;
  }

  .u-middle--abs {
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  h1,
  h3,
  p {
    margin: 0;
  }

  .u-table-cell--middle {
    vertical-align: middle;
  }

  .u-table {
    display: table;
  }

  .u-table-cell,
  .u-table-cell--middle {
    display: table-cell;
  }

  h1,
  h3 {
    font-weight: 400;
  }

  button {
    border: none;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }

  *,
  :after,
  :before {
    box-sizing: inherit;
  }

  .u-hitArea {
    background: url(http://thieb.co/assets/images/transparent.gif);
    background-size: 100%;
    cursor: pointer;
    z-index: 2;
  }

  .Footer-lang button,
  .Header-nav,
  .TimelineHandle-block p,
  .WorkPreview-title h1 {
    font-family: GothamNarrow-Medium;
  }

  .Footer a {
    font-family: GothamNarrow-Book;
  }

  body,
  html {
    width: 100%;
    height: 100%;
    background-color: #161616;
    overflow: hidden;
  }

  .App {
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }

  .WorkPreview-content,
  .WorkPreview-title .line,
  .Works {
    overflow: hidden;
  }

  .Footer,
  .Header {
    width: 85.71429%;
    margin-left: 7.14286%;
  }

  .WorkPreview-cover:after,
  .WorkPreview:before {
    content: "";
  }

  .BackgroundType,
  .Footer {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    pointer-events: none;
  }

  .Works {
    opacity: 0;
    cursor: -webkit-grab;
    cursor: grab;
  }

  .Works:active {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }

  .Works .Timeline {
    position: absolute;
    width: 48%;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 69px;
  }

  .Works-list {
    z-index: 1;
    white-space: nowrap;
    left: 21.42857%;
  }

  .Works-list .WorkPreview:nth-of-type(n+2) {
    margin-left: 10.28571%;
  }

  .BackgroundType {
    position: absolute;
    user-select: none;
  }

  .Footer {
    position: fixed;
    z-index: 10;
    user-select: none;
    bottom: 71px;
    opacity: 0;
  }

  .Header,
  .TimelineHandle-block p {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  .Footer a,
  .Footer button {
    font-size: 12px;
    pointer-events: auto;
    color: #fff;
    opacity: .2;
  }

  .Noise,
  .Timeline {
    pointer-events: none;
  }

  .Footer button.is-active,
  .is-desktop .Footer.is-ready a:hover,
  .is-desktop .Footer.is-ready button:hover {
    opacity: 1;
  }

  .Footer a {
    display: inline-block;
  }

  .Header-menuButton,
  .Header-menuButtonArea,
  .is-desktop .Header-logo .underline {
    display: none;
  }

  .is-desktop .Footer.is-ready a,
  .is-desktop .Footer.is-ready button {
    transition: opacity .4s cubic-bezier(.23, 1, .32, 1);
  }

  .Footer-lang {
    position: absolute;
    right: -9px;
    bottom: 0;
  }

  .Footer-lang button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    background: 0 0;
    cursor: pointer;
    margin-left: 5px;
  }

  .Header {
    position: fixed;
    z-index: 10;
    user-select: none;
  }

  .Header-logo {
    position: absolute;
    left: -23px;
    top: 56px;
    width: 59px;
    height: 34px;
    opacity: 0;
  }

  .HeaderLogo-anim {
    position: absolute;
    width: 14px;
    height: auto;
    left: 25px;
    top: 29px;
  }

  .Header-nav {
    position: absolute;
    right: -9px;
    top: 71px;
    opacity: 0;
    color: #fff;
    font-size: 13px;
  }

  .Header-nav a,
  .Header-nav span {
    position: relative;
  }

  .Header-link,
  .Header-nav svg {
    top: 0;
    position: absolute;
  }

  .Header-nav a {
    display: inline-block;
    margin-left: 27px;
  }

  .Header-nav a.is-active .Header-link {
    color: #fff;
  }

  .Header-nav span a {
    position: absolute;
    right: 0;
  }

  .Header-nav svg {
    width: 21px;
    height: 5px;
    left: -33px;
    bottom: 0;
    margin: auto 0;
    -webkit-transform: translateY(-1.5px);
    -ms-transform: translateY(-1.5px);
    transform: translateY(-1.5px);
    fill: #fff;
  }

  .Header-link--sizing {
    position: relative;
    visibility: hidden;
  }

  .Header-link--regular {
    color: rgba(255, 255, 255, .2);
  }

  .HeaderNav-works--back .Header-link,
  .TimelineHandle-block--dark p {
    color: #fff;
  }

  .Header-link--hover {
    opacity: 0;
  }

  .HeaderNav-works {
    position: absolute;
    top: 0;
    right: 0;
    white-space: nowrap;
  }

  .HeaderNav-works--regular {
    visibility: visible;
  }

  .HeaderNav-works--back {
    visibility: hidden;
  }

  .Noise {
    position: fixed;
  }

  .Timeline {
    width: 100%;
    height: 16px;
    z-index: 4;
  }

  .Timeline>.Timeline-arrow {
    pointer-events: auto;
  }

  .Timeline-dot {
    position: absolute;
    width: 4px;
    height: 4px;
    top: 50%;
    margin-top: -1px;
    fill: #fff;
    opacity: 0;
    stroke: none;
  }

  .Timeline-dot--left {
    left: 8px;
  }

  .Timeline-dot--right {
    right: 8px;
  }

  .Timeline-arrow {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    cursor: pointer;
    width: 20px;
    height: 100%;
    pointer-events: none;
    transition: opacity .4s cubic-bezier(.23, 1, .32, 1), -webkit-transform .4s cubic-bezier(.23, 1, .32, 1);
    transition: opacity .4s cubic-bezier(.23, 1, .32, 1), transform .4s cubic-bezier(.23, 1, .32, 1);
  }

  .Timeline-arrow svg {
    width: 4px;
    height: 8px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    fill: #fff;
    stroke: none;
  }

  .Timeline-arrow--left {
    left: 0;
    -webkit-transform: scaleX(-1);
    -ms-transform: scaleX(-1);
    transform: scaleX(-1);
  }

  .Timeline-arrow--right {
    right: 0;
  }

  .Timeline-dots {
    width: calc(100% - 38px);
    left: 19px;
  }

  .Timeline-handle {
    position: absolute;
    left: 0;
    top: 0;
    width: 58px;
    height: 100%;
    pointer-events: auto;
    cursor: -webkit-grab;
    cursor: grab;
  }

  .Timeline-mask,
  .WorkPreview.is-hidden {
    pointer-events: none;
  }

  .Timeline-handle .Timeline-arrow {
    opacity: 0;
  }

  .Timeline-handle .Timeline-arrow--left {
    left: -19px;
    -webkit-transform: translateX(19px) scaleX(-1);
    -ms-transform: translateX(19px) scaleX(-1);
    transform: translateX(19px) scaleX(-1);
  }

  .Timeline-handle .Timeline-arrow--right {
    right: -19px;
    -webkit-transform: translateX(-19px);
    -ms-transform: translateX(-19px);
    transform: translateX(-19px);
  }

  .TimelineHandle-hitArea {
    position: absolute;
    left: -12px;
    top: -12px;
    width: calc(100% + 24px);
    height: calc(100% + 24px);
  }

  .is-desktop .Timeline-handle:active {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }

  .is-desktop .Timeline-handle:hover .Timeline-arrow {
    opacity: 1;
  }

  .is-desktop .Timeline-handle:hover .Timeline-arrow--left {
    -webkit-transform: translateX(0) scaleX(-1);
    -ms-transform: translateX(0) scaleX(-1);
    transform: translateX(0) scaleX(-1);
  }

  .is-desktop .Timeline-handle:hover .Timeline-arrow--right {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  .is-desktop .TimelineHandle-hitArea {
    display: none;
  }

  .TimelineHandle-block {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
  }

  .WorkPreview,
  .WorkPreview-cover {
    position: relative;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
  }

  .TimelineHandle-block p {
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    user-select: none;
  }

  .TimelineHandle-block--dark {
    background-color: #262626;
  }

  .TimelineHandle-block--light {
    background-color: #fff;
  }

  .TimelineHandle-block--light p {
    color: #000;
  }

  .Timeline-mask--outer {
    overflow: hidden;
    -webkit-transform: translateX(-101%);
    -ms-transform: translateX(-101%);
    transform: translateX(-101%);
  }

  .Timeline-mask--inner {
    -webkit-transform: translateX(101%);
    -ms-transform: translateX(101%);
    transform: translateX(101%);
  }

  .WorkPreview {
    width: 57.14286%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .WorkPreview:before {
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }

  .WorkPreview-cover {
    z-index: 1;
    width: 100%;
  }

  .WorkPreview-cover:after {
    padding-top: 47.25%;
    display: block;
  }

  .WorkPreview-cover img {
    z-index: 2;
  }

  .WorkPreview-cover video {
    z-index: 1;
  }

  .WorkPreview-content {
    width: 84%;
    left: 8%;
    position: absolute;
  }

  .WorkPreview-content img,
  .WorkPreview-content video {
    width: 102%;
    height: 102%;
    left: -1%;
    top: -1%;
  }

  .WorkPreview-video {
    z-index: 2;
    display: none;
  }

  .is-desktop .WorkPreview-video {
    display: block;
  }

  .WorkPreview-title {
    position: absolute;
    z-index: 3;
    left: 0;
    top: calc(50% - 67px);
  }

  .WorkPreview-title h1 {
    color: #fff;
    font-size: 80px;
    line-height: 80px;
    text-align: left;
    white-space: initial;
  }

  .WorkPreview-title .line--inner {
    display: inline-block;
    -webkit-transform: translateY(120%);
    -ms-transform: translateY(120%);
    transform: translateY(120%);
  }

  .is-desktop .WorkPreview-title {
    margin-left: -5px;
  }

  @media (max-width:1279px) {
    .is-desktop .WorkPreview-title h1 {
      font-size: 70px;
      line-height: 70px;
    }
  }

  /*! CSS Used fontfaces */
  @font-face {
    font-family: GothamNarrow-Medium;
    src: url(http://thieb.co/assets/fonts/GothamNarrow-Medium.woff) format("woff"), url(http://thieb.co/assets/fonts/GothamNarrow-Medium.ttf) format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: GothamNarrow-Book;
    src: url(http://thieb.co/assets/fonts/GothamNarrow-Book.woff) format("woff"), url(http://thieb.co/assets/fonts/GothamNarrow-Book.ttf) format("truetype");
    font-weight: 400;
    font-style: normal;
  }
</style>