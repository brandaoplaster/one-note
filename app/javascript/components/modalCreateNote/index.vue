<template>
  <v-row justify="center">

    <v-dialog v-model="showModalCreateNote" persistent max-width="600">
     
     <v-card>
        <v-card-title >
          <span class="headline">User Profile</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              
              <v-col cols="12">
                <v-text-field label="title" outlined required></v-text-field>
              </v-col>

              <v-col cols="12" sm="12">
                <v-textarea
                  background-color="amber lighten-4"
                  label="Descrição da nota"
                  auto-grow
                  outlined
                  rows="3"
                  required
                  row-height="25"
                  shaped
                ></v-textarea>
              </v-col>
              
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click.prevent="close">Close</v-btn>
          <v-btn color="blue darken-1" text>
            Criar
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    props: {
      showModalCreateNote: {
        required: true
      }
    },
    data: () => ({}),

    methods: {
      close() {
        this.$emit('close-modal-create-note', !this.showModalCreateNote);
      }            
    }
  }
</script>