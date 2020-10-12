<template>
  <v-row justify="center">
    <v-dialog v-model="showModalAddTag" persistent max-width="600">
      <v-card>
        <v-card-title>
          <span class="headline text-center">Tags</span>
        </v-card-title>

        <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-row>
                  <v-col cols="9" class="ma-0 pr-2">
                    <v-text-field label="Título" v-model="title" outlined required></v-text-field>
                  </v-col>

                  <v-col cols="3" class="ma-0 pl-1 ">
                    <v-btn large color="green" @click="createTag" class="mt-1">Salvar</v-btn>
                  </v-col>
                </v-row>
              </v-col>

              <v-col cols="12">
                <v-list-item v-for="tag in tags" :key="tag.id">
                  <v-chip
                    class="ma-2"
                    color="teal accent-4"
                    label
                    outlined
                    text-color="green darken-3"
                  >
                    {{tag.title}}
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon right @click="linkTagToNote(tag.id)" v-bind="attrs" v-on="on">
                          mdi-close-circle
                        </v-icon>
                      </template>
                      <span>Adicionar Tag</span>
                    </v-tooltip>
                  </v-chip>
                </v-list-item>
              </v-col>
            </v-row>

          <v-card-actions>
            <v-btn color="green" text-color="white" @click="close">Fecha</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data: () => ({
    title: '',
  }),

  props: {
    showModalAddTag: {
      required: true
    },
    selectedNoteId: {
      required: true
    }
  },

  methods: {
    close() {
      this.$emit('close-modal-add-tag', !this.showModalAddTag)
    },

    createTag() {
      this.tagCreate({
        title: this.title,
      });
      this.title = '';
      this.getTags();
      this.close();
    },

    linkTagToNote(id) {
      this.addTagNote({
        tag_id: id,
        note_id: this.selectedNoteId,
      });
      this.getTags();
    },

    removeTag(id) {
      this.deleteTag({
        id: id
      });
      this.getTags();
    },

    ...mapActions({
      tagCreate: 'Tag/create',
      getTags: 'Tag/getTags',
      deleteTag: 'Tag/delete',
      addTagNote: 'TagNote/addTagNote',
    }),
  },

  mounted() {
    this.$store.dispatch('Tag/getTags');
  },

  computed: mapState({
    tags: state => state.Tag.tags,
  }),
}
</script>