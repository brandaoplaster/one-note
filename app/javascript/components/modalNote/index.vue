<template>
  <v-row justify="center">

    <v-dialog v-model="showModal" persistent width="600">
      <v-card>
        <v-card-title class="headline">
          {{ selectedNote.title }}
        </v-card-title>

        <v-card-text>
          <div class="my-4 subtitle-1">
            {{ selectedNote.body }}
          </div>
          <v-list-item-subtitle>{{selectedNote.created_at}}</v-list-item-subtitle>
        </v-card-text>

        <v-card-actions>

          <v-chip-group v-if="selectedNote.tags.length > 0" column class="ml-2">
            <v-chip v-for="tag in selectedNote.tags" :key="tag.id"
              class="ma-1"
              color="green"
              label
              outlined
              @click=""
            >
              #{{tag.title}}
            </v-chip>
          </v-chip-group>

          <v-chip-group v-if="selectedNote.tags.length == 0" column class="ml-2">
            <v-chip class="ma-1"
              color="gray"
              label
              outlined
            >
              Nota sem tag
            </v-chip>
          </v-chip-group>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click.prevent="close">
            Fechar
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    props: {
      showModal: {
        required: true
      },
      selectedNote: {
        required: true
      }
    },
    data: () => ({
      dialog: false,
    }),
    methods: {
      close() {
        this.$emit('close-modal', !this.showModal);
      }            
    }
  }
</script>