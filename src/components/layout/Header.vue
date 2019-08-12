<template lang="pug">
  section.hero.is-success
    .hero-head
        header.nav
          .container
            .nav-left
              .nav-item
                strong 📻  Platzi Music
            .nav-right.nav-menu
              router-link.nav-item(:to="{ name: 'search' }") Buscar
              router-link.nav-item(to="about") Nosotros
    
    .hero-body
      .container.has-text-centered
        h1.title Music-Pro
        h2.subtitle Search all songs
        mp-player
</template>

<script>
import MpPlayer from '../../components/Player.vue'
export default {
  components: {
    MpPlayer
  }
}
</script>
