<template>
  <v-main id="home">
    <v-container fluid ma-0 pa-1>
      <nav-bar></nav-bar>
      <note-list></note-list>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data: () => ({}),

  components: {
    NavBar: () => import('../navbar'),
    NoteList: () => import('../notelist'),
  }
}
</script>