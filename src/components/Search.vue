<template lang="pug">
  main
    transition(name="move")
      mp-notification(v-show="showNotification")
        p(slot="body") No se encontraron resultados
    
    transition(name="move")
      mp-loader(v-show="isloading")
    
    section.section(v-show="!isloading")
      nav.nav
        .container
          input.input.is-large(
            type="text", 
            placeholder="Buscar Canciones",
            v-model="searchQuery",
            @keyup.enter="search"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;

      .containter
        p
          small {{ searchMessage }}
      
      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks") 
            mp-track(
              v-blur="t.preview_url"
              :class="{'is-active': t.id === selectedTrack}",
              :track="t", 
              @select="setSelectedTrack")
</template>

<script>
import trackService from '../services/track'
import MpTrack from './Track.vue'
import MpLoader from './shared/Loader.vue'
import MpNotification from './shared/Notification.vue'

export default {
  name: "app",

  components: {
    MpTrack,
    MpLoader,
    MpNotification
  },

  data() {
    return {
      searchQuery: '',
      tracks: [],
      isloading: false,
      selectedTrack: '',
      showNotification: false
    };
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }

      this.isloading = true

      trackService.search(this.searchQuery)
      .then( res => {
        this.showNotification = res.tracks.total === 0
        this.tracks = res.tracks.items
        this.isloading = false
      })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  }
};
</script>

<style lang="scss">

  .is-active {
    border: 3px #23d160 solid;
  }
</style>
