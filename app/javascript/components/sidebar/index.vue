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
        <v-col cols="12" sm="9" md="9">
          <v-text-field
            label="Search"
          outlined
          dense
          ></v-text-field>
        </v-col>
        <div class="mb-3 pb-3">
        <v-btn color="blue-grey" class="ma-0 white--text">
            <v-icon right dark>mdi-magnify</v-icon>
          </v-btn>
        </div>
      </v-list-item>

      <v-divider class="pb-3"></v-divider>

      <v-list-item v-for="item in items"  :key="item.title" link>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
      </v-list-item>

      <v-bottom-navigation absolute horizontal>
        <v-btn text color="deep-purple accent-4" @click="showModalProfile = true">
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
  </v-navigation-drawer>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Ruby on rails', icon: 'mdi-view-dashboard' },
        { title: 'Reactjs', icon: 'mdi-image' },
        { title: 'Vuejs', icon: 'mdi-help-box' },
        { title: 'Python', icon: 'mdi-help-box' },
        { title: 'PHP', icon: 'mdi-help-box' },
      ],
      color: 'primary',
      permanent: true,
      miniVariant: false,
      showModalProfile: false,
    }),

    computed: {
      bg () {
        return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
      },
    },

    components: {
      ModalProfile: () => import('../modalProfile'),
    },

    methods: {
      openModalProfile() {
        this.showModalProfile = !this.showModalProfile;
      },

      closeModalProfile() {
        this.showModalProfile = !this.showModalProfile;
      },


    },
  }
</script>