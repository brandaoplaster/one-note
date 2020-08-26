<template>
  <v-main id="home">
    <v-container fluid ma-0 pa-1>
      <nav-bar></nav-bar>
      <note-list :notes="notes"></note-list>
    </v-container>
  </v-main>
</template>

<script>
import{ mapState } from 'vuex';

export default {
  data: () => ({}),

  mounted() {
    this.$store.dispatch('Note/getNotes');
  },

  computed: mapState({
    notes: state => state.Note.notes,
  }),

  components: {
    NavBar: () => import('../navbar'),
    NoteList: () => import('../notelist'),
  }
}
</script>