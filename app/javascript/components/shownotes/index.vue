<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col v-for="n in 9" :key="n" cols="6" md="4">
        <v-card class="pa-1" outlined tile>
          <v-card-title>
            <v-icon
              large
              left
            >
              mdi-twitter
            </v-icon>
            <span class="title font-weight-light">Twitter</span>
          </v-card-title>

          <v-card-text class="headline text-justify body-1">
            "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
          </v-card-text>

          <v-chip-group
            active-class="deep-purple accent-4 white--text"
            column
          >
            <v-chip>#ruby</v-chip>
            <v-chip>#vuejs</v-chip>
            <v-chip>#ruby on rails</v-chip>
          </v-chip-group>

          <v-card-actions>
            <v-btn
              text
              color="deep-purple accent-4"
            >
              Editar
            </v-btn>
            <v-btn
              text
              color="deep-purple accent-4"
            >
              Deletar
            </v-btn>

            <v-btn text color="deep-purple accent-4" @click="showModal = true">
              Ler
            </v-btn>
            <v-spacer></v-spacer>
            
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>


        </v-card>
      </v-col>
    </v-row>
    
    <model-notes  :showModal="showModal" @close-modal="closeModal"></model-notes>

  </v-container>
</template>

<script>
export default {
  data: () => ({
    showModal: false,
   
  }),

  methods: {
    openModal() {
      this.showModal = !this.showModal;
    },

    closeModal() {
      this.showModal = !this.showModal;
    },
 
  },


  components: {
    ModelNotes: () => import('../modalNote'),
  }
}
</script>