<template>
  <v-row justify="center">

    <v-dialog v-model="showModal" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click.prevent="close">
            close
          </v-btn>

          <v-btn color="green darken-1" text>
            salva
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