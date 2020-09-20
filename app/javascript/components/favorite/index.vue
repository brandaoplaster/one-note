<template>
  <v-container>
    <v-toolbar dark :elevation="0" dense>
      <v-toolbar-title>Notas Favoritas</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-sheet class="mx-auto" elevation="1" max-width="1062">
      <v-slide-group
        v-model="model"
        class="pa-1"
        active-class="success"
        show-arrows
      >
        <v-slide-item
          v-for="n in 6"
          :key="n"
          v-slot:default="{ active, toggle }"
        >
          <v-card
            :color="active ? undefined : 'grey lighten-1'"
            class="ma-1"
            height="200"
            width="200"
            @click="toggle"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-scale-transition>
                <v-icon
                  v-if="active"
                  color="white"
                  size="48"
                  v-text="'mdi-close-circle-outline'"
                ></v-icon>
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      model: null,
    }),
  }
</script>