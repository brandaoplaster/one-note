<template>
  <v-main id="home">
    <v-container fluid ma-0 pa-1>
      <nav-bar></nav-bar>
      <v-row>
        
        <note-list :items="favorites"></note-list>
      </v-row>

      <v-row>
        <note-list :items="notes"></note-list>
      </v-row>
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