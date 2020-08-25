<template>
  <v-app>
    <sidebar></sidebar>
    <home></home>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  
  data: () => ({}),

  components: {
    Sidebar: () => import('../components/sidebar'),
    Home: () => import('../components/home');
  },
}
</script>

<style scoped>
</style>
