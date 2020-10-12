<template>
  <v-main id="home">
    <v-container fluid ma-0 pa-1>
      <nav-bar></nav-bar>
      <note-list :items="favorites"></note-list>
      <!-- <note-list :notes="notes"></note-list> -->
    </v-container>
  </v-main>
</template>

<script>
import{ mapState } from 'vuex';

export default {
  data: () => ({}),

  mounted() {
    this.$store.dispatch('Note/getNotes');
    this.$store.dispatch('Favorite/getFavorites');
  },

  computed: mapState({
    notes: state => state.Note.notes,
    favorites: state => state.Favorite.favorites,
  }),

  components: {
    NavBar: () => import('../../components/navbar'),
    NoteList: () => import('../../components/notelist'),
  }
}
</script>