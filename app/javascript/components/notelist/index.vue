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

          <v-chip-group v-if="note.tags.length > 0" column class="ml-2">
            <v-chip v-for="tag in note.tags" :key="tag.id"
              class="ma-1"
              color="green"
              label
              outlined
              @click=""
            >
              #{{tag.title}}
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon right @click="removeTag(tag.id)" v-bind="attrs" v-on="on">mdi-close-circle</v-icon>
                </template>
                <span>Remove Tag</span>
              </v-tooltip>
            </v-chip>
          </v-chip-group>

          <v-chip-group v-if="note.tags.length == 0" column class="ml-2">
            <v-chip class="ma-1"
              color="gray"
              label
              outlined
            >
              Nota sem tag
            </v-chip>
          </v-chip-group>

          <v-card-actions>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon @click="showModalAddTag = true" v-bind="attrs" v-on="on" text color="grey">
                  <v-icon>mdi-pound</v-icon>
                </v-btn>
              </template>
              <span>Add Tag</span>
            </v-tooltip> 
            
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon color="orange" v-bind="attrs" v-on="on">
                  <v-icon>mdi-file-document-edit</v-icon>
                </v-btn>
              </template>
              <span>Editar nota</span>
            </v-tooltip> 

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon color="red" v-bind="attrs" v-on="on" @click="deleteNote(note.id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>
              <span>Deletar nota</span>
            </v-tooltip> 

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon color="blue" @click="openModal(note)" v-bind="attrs" v-on="on">
                  <v-icon>mdi-book-open</v-icon>
                </v-btn>
              </template>
              <span>Ler nota</span>
            </v-tooltip> 


            <v-spacer></v-spacer>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-star-outline</v-icon>
                </v-btn>
              </template>
              <span>Favoritar nota</span>
            </v-tooltip> 
          
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon  @click="openModalShared" v-bind="attrs" v-on="on">
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </template>
              <span>Compartilhar nota</span>
            </v-tooltip> 
          </v-card-actions>


        </v-card>
      </v-col>
    </v-row>
    
    <model-notes :selectedNote="selectedNote"  :showModal="showModal" @close-modal="closeModal"></model-notes>
    <modal-shared :showModalShared="showModalShared" @close-modal-shared="closeModalShared"></modal-shared>
    <modal-add-tag :showModalAddTag="showModalAddTag" @close-modal-add-tag="closeModalTag"></modal-add-tag>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    showModal: false,
    showModalShared: false,
    showModalAddTag: false,
    selectedNote: {},
  }),

  props: {
    notes: {
      type: Array,
      required: true,
    }
  },

  methods: {
    openModal(note) {
      this.showModal = !this.showModal;
      this.selectedNote = note;
    },

    closeModal() {
      this.showModal = !this.showModal;
    },

    openModalShared() {
      this.showModalShared = !this.showModalShared;
    },

    closeModalShared() {
      this.showModalShared = !this.showModalShared;
    },

    openModalTag() {
      this.showModalAddTag = !this.showModalAddTag;
    },

    closeModalTag() {
      this.showModalAddTag = !this.showModalAddTag;
    },

    getNotes(){
      this.$store.dispatch('Note/getNotes');
    },

    removeTag(id) {
      this.removeTag({
        id: id,
      });
      this.getNotes();
    },

    deleteNote(id) {
      this.noteRemove({ id });
      this.getNotes();
    },

    ...mapActions({
      noteRemove: 'Note/remove',
      removeTag: 'Tag/remove',
    }),
  },


  components: {
    ModelNotes: () => import('../modalNote'),
    ModalShared: () => import('../modalshared'),
    ModalAddTag: () => import('../modalAddTag'),
  }
}
</script>