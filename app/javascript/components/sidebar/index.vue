<template>
  <v-navigation-drawer clipped fixed  inset app :permanent="permanent" dark>
    <v-list dense nav class="py-0">
      <v-list-item two-line :class="miniVariant && 'px-0'">
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/81.jpg">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>myemailthe@gmail.com</v-list-item-title>
          <v-list-item-subtitle>brandaoplaster</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item class="pa-1 ma-0 mt-6">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="openModalCreateNote"
              v-bind="attrs" v-on="on"
              color="green"
              block
              small>
              <v-icon>mdi-note-plus-outline</v-icon>
            </v-btn>
            
          </template>
          <span>Add Note</span>
        </v-tooltip>

      </v-list-item>

      <v-divider class="pb-3"></v-divider>

      <v-list-item v-for="tag in tags"  :key="tag.id" link>
        <v-list-item-content>
          <v-list-item-title>#{{ tag.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-bottom-navigation absolute horizontal>
        <v-btn text @click="showModalProfile = true">
          <span>Perfil</span>
          <v-icon>mdi-account-cog</v-icon>
        </v-btn>

        <v-btn href="/users/sign_out">
          <span>Sair</span>
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </v-bottom-navigation>

    </v-list>

    <modal-profile :showModalProfile="showModalProfile"
      @close-modal-profile="closeModalProfile">
    </modal-profile>

    <modal-note
      :modalNote="modalNote"
      @close-modal-create-note="closeModalCreateNote"
    ></modal-note>

  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';

  export default {
    data: () => ({
      permanent: true,
      miniVariant: false,
      showModalProfile: false,
      modalNote: false,
    }),

    mounted() {
      this.$store.dispatch('Tag/getTags');
    },

    computed: mapState({
      tags: state => state.Tag.tags,
    }),

    components: {
      ModalProfile: () => import('../modal/profile'),
      ModalNote: () => import('../modal/note'),
    },

    methods: {
      openModalProfile() {
        this.showModalProfile = !this.showModalProfile;
      },

      closeModalProfile() {
        this.showModalProfile = !this.showModalProfile;
      },
      openModalCreateNote() {
        this.modalNote = !this.modalNote;
      },

      closeModalCreateNote() {
        this.modalNote = !this.modalNote;
      },
    },
  }
</script>