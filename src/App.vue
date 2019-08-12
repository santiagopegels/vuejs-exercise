<template lang="pug">
  #app
    mp-header
    router-view  
    mp-footer
</template>

<script>
import MpFooter from './components/layout/Footer.vue'
import MpHeader from './components/layout/Header.vue'

export default {
  name: "app",

  components: {
    MpFooter,
    MpHeader,
  },

};
</script>

<style lang="scss">
@import './scss/main.scss';

  .is-active {
    border: 3px #23d160 solid;
  }
</style>
