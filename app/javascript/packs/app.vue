<template>
  <v-app>
    <sidebar></sidebar>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  
  data: () => ({}),

  components: {
    Sidebar: () => import('../components/sidebar'),
  },
}
</script>

<style scoped>
</style>
