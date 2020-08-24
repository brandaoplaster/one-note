<template>
  <v-row justify="center">

    <v-dialog v-model="showModalProfile" persistent max-width="600">
     
     <v-card>
        <v-card-title >
          <span class="headline">User Profile</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              
              <v-col cols="12">
                <v-text-field label="Name" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password" type="password" required></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field label="Password confirmation" type="password" required></v-text-field>
              </v-col>
              
              
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click.prevent="close">Close</v-btn>
          <v-btn color="blue darken-1" text>
            Atualizar
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    props: {
      showModalProfile: {
        required: true
      }
    },
    data: () => ({}),

    methods: {
      close() {
        this.$emit('close-modal-profile', !this.showModalProfile);
      }            
    }
  }
</script>