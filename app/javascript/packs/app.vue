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

        <v-layout row wrap pb-2>
          <v-flex xs12 sm12 md12>

            <v-card class="d-inline-block mx-auto">
              <v-container>
                <v-row justify="space-between">
                  <v-col cols="auto">
                    <v-img
                      height="200"
                      width="200"
                      src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
                    ></v-img>
                  </v-col>

                  <v-col cols="auto" class="text-center pl-0">
                    <v-row
                      class="flex-column ma-0 fill-height"
                      justify="center"
                    >
                      <v-col class="px-0">
                        <v-btn icon>
                          <v-icon>mdi-heart</v-icon>
                        </v-btn>
                      </v-col>

                      <v-col class="px-0">
                        <v-btn icon>
                          <v-icon>mdi-bookmark</v-icon>
                        </v-btn>
                      </v-col>

                      <v-col class="px-0">
                        <v-btn icon>
                          <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>

          </v-flex>
        </v-layout>
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
  },
}
</script>

<style scoped>
</style>
