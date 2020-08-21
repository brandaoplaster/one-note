<template>
  <v-app>
    <v-navigation-drawer clipped fixed  inset app :permanent="permanent" dark>
      <v-list dense nav class="py-0">
        <v-list-item two-line :class="miniVariant && 'px-0'">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>myemailthe@gmail.com</v-list-item-title>
            <v-list-item-subtitle>brandaoplaster</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item class="pa-1 ma-0 mt-6">
          <v-col cols="12" sm="9" md="9">
            <v-text-field
              label="Search"
            outlined
            dense
            ></v-text-field>
          </v-col>
          <div class="mb-3 pb-3">
           <v-btn color="blue-grey" class="ma-0 white--text">
              <v-icon right dark>mdi-magnify</v-icon>
            </v-btn>
          </div>
        </v-list-item>

        <v-divider></v-divider>

         <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-list>
    </v-navigation-drawer>

   
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
      drawerRight: null,
      drawer: true,
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
          { title: 'item 3', icon: 'mdi-help-box' },
          { title: 'help', icon: 'mdi-help-box' },
          { title: 'Ruby', icon: 'mdi-help-box' },
          { title: 'React', icon: 'mdi-help-box' },
        ],
        color: 'primary',
        colors: [
          'dark',
          'blue',
          'success',
          'red',
          'teal',
        ],
        right: false,
        permanent: true,
        miniVariant: false,
        expandOnHover: false,
        background: false,
    }),

  components: {
    Sidebar: () => import('../components/sidebar'),
  },
  computed: {
      bg () {
        return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
      },
    },
}
</script>

<style scoped>
</style>
