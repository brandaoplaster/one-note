<template>
  <v-app>
    <Sidebar></Sidebar>

    <v-main id="home">
      <v-container fluid ma-0 pa-1>
        <v-app-bar color="blue-grey darken-3" dark>
          <v-btn class="ma-2" color="orange darken-2" dark>
            <v-icon left>mdi-pencil</v-icon> Edita
          </v-btn>

          <v-btn class="ma-2" color="orange darken-2" dark>
            <v-icon left>mdi-content-save</v-icon> Salvar
          </v-btn>

          <v-btn class="ma-2" color="orange darken-2" dark>
            <v-icon dark left>mdi-arrow-left</v-icon>Back
          </v-btn>

          <v-btn class="ma-2" color="orange darken-2" dark>
            <v-icon left>mdi-delete</v-icon> Delete
          </v-btn>

          <v-btn class="ma-2" color="orange darken-2" dark>
            <v-icon left>mdi-share-variant</v-icon> Compartilha
          </v-btn>          
        
        </v-app-bar>

        <ShowNotes></ShowNotes>
      </v-container>
    </v-main>    
  </v-app>
</template>

<script>
export default {
  name: 'App',
  props: {
    source: String,
  },
    data: () => ({
      
    }),

  components: {
    Sidebar: () => import('../components/sidebar'),
    ShowNotes: () => import('../components/shownotes'),
  },
}
</script>

<style scoped>
</style>
