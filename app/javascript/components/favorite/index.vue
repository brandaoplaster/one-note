<template>
  <v-container>
    <v-toolbar dark :elevation="0" dense>
      <v-toolbar-title>Notas Favoritas</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-sheet v-if="favorites.length" class="mx-auto" elevation="1" max-width="1062">
      <v-slide-group v-model="model" class="pa-1" active-class="success" show-arrows>
        <v-slide-item v-for="favorite in favorites" :key="favorite.id">
          <v-card color="grey" class="ma-1" height="200" width="220">
            <v-card-title>
            
              <span class="title font-weight-light">
                {{favorite.note.title}}
              </span>
            
            </v-card-title>

            <v-card-text class="headline text-justify body-1">
              {{ favorite.note.body.slice(0, 30) + '...' }}
            </v-card-text>
            
            <footer-action></footer-action>
          
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>

<script>
import{ mapState } from 'vuex';

  export default {
    data: () => ({
      model: null,
    }),

    mounted() {
      this.$store.dispatch('Favorite/getFavorites');
    },

    computed: mapState({
      favorites: state => state.Favorite.favorites,
    }),

    components: {
      FooterAction: () => import('../footerAction'),
    }
  }
</script>