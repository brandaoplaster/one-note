<template>
  <v-container class="grey lighten-5">
    <v-row v-if="notes.length > 0">
      <v-col v-for="note in notes" :key="note.id" cols="6" md="4">
        <v-card class="pa-1" outlined tile>
          <v-card-title>
            
            <span class="title font-weight-light">{{ note.title }}</span>
          </v-card-title>

          <v-card-text class="headline text-justify body-1">
            {{ note.body.slice(0, 30) + '...' }}
          </v-card-text>

          <v-chip-group v-if="note.tags.length > 0" column class="ml-3">
            <v-chip v-for="tag in note.tags" :key="tag.id">
              #{{tag.title}}
            </v-chip>
          </v-chip-group>

          <v-chip-group v-if="note.tags.length == 0" column class="ml-2">
            <v-chip>
              Nota sem tag
            </v-chip>
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
            
            <v-btn icon left>
              <v-icon>mdi-star-outline</v-icon>
            </v-btn>

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

  props: {
    notes: {
      type: Array,
      required: true,
    }
  },

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