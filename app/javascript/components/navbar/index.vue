<template>
  <v-app-bar dark>
    <v-row class="mb-0 mt-6">
      <v-col cols="12" sm="5">
        <v-text-field
          outlined
          dense
          label="Search title"
          append-icon="mdi-magnify"
        ></v-text-field>

      </v-col>
    </v-row>
    <v-btn class="ma-2" color="green darken-4" @click="openModalCreateNote">
      <v-icon left>mdi-content-save</v-icon> Criar nota
    </v-btn>      
  
  <modal-create-note
    :showModalCreateNote="showModalCreateNote"
    @close-modal-create-note="closeModalCreateNote"
  ></modal-create-note>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    showModalCreateNote: false,
  }),

  components: {
    ModalCreateNote: () => import('../modalCreateNote'),
  },

  methods: {
    openModalCreateNote() {
      this.showModalCreateNote = !this.showModalCreateNote;
    },

    closeModalCreateNote() {
      this.showModalCreateNote = !this.showModalCreateNote;
    },
  },
}
</script>