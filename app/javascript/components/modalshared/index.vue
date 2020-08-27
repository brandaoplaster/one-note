<template>
  <v-row justify="center">

    <v-dialog v-model="showModalShared" persistent max-width="600">
     
     <v-card>
        <v-card-title >
          <span class="headline">Compartilhe está nota</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              
              <v-col cols="12">
                <v-text-field label="E-mail" outlined required></v-text-field>
              </v-col>
              
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click.prevent="close">Close</v-btn>
          <v-btn color="blue darken-1" text>
            Compartilhar
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    props: {
      showModalShared: {
        required: true
      }
    },
    data: () => ({}),

    methods: {
      close() {
        this.$emit('close-modal-shared', !this.showModalShared);
      }            
    }
  }
</script>