<template>
  <v-container class="grey lighten-5 pt-0">
    <v-row>
      <list-favorite></list-favorite>
    </v-row>
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

          <footer-action></footer-action>

        </v-card>
      </v-col>
    </v-row>
    
    <model-notes :selectedNote="selectedNote"  :showModal="showModal" @close-modal="closeModal"></model-notes>
    <modal-shared :showModalShared="showModalShared" @close-modal-shared="closeModalShared"></modal-shared>
    <modal-add-tag :selectedNoteId="selectedNoteId" :showModalAddTag="showModalAddTag" @close-modal-add-tag="closeModalTag"></modal-add-tag>
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
    selectedNoteId: '',
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

    openModalAddTag(note_id) {
      this.showModalAddTag = true;
      this.selectedNoteId = note_id;
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

    favorite(note_id) {
      this.favoritable({
        note_id: note_id,
      });
    },

    ...mapActions({
      noteRemove: 'Note/remove',
      removeTag: 'Tag/remove',
      favoritable: 'Favorite/create',
    }),
  },

  components: {
    ModelNotes: () => import('../modalNote'),
    ModalShared: () => import('../modalshared'),
    ModalAddTag: () => import('../modalAddTag'),
    ListFavorite: () => import('../favorite'),
    FooterAction: () => import('../footerAction'),
  }
}
</script>