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
                    <v-btn large color="green" @click="" class="mt-1">Salvar</v-btn>
                  </v-col>
                </v-row>
              </v-col>

              <v-col cols="12">
                <v-list-item v-for="tag in tags" :key="tag.id">
                  <v-chip
                    class="ma-2"
                    color="black"
                    label
                    text-color="white"
                  >
                    <v-icon left>mdi-label</v-icon>
                    {{tag.title}}
                  </v-chip>
                </v-list-item>
              </v-col>
            </v-row>

          <v-card-actions>
            <v-btn color="green text-white" @click="close">Fecha</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({

  }),

  props: {
    showModalAddTag: {
      required: true
    }
  },

  methods: {
    close() {
      this.$emit('close-modal-add-tag', !this.showModalAddTag)
    },
  },

  mounted() {
    this.$store.dispatch('Tag/getTags');
  },

  computed: mapState({
    tags: state => state.Tag.tags,
  }),
}
</script>