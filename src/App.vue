<template>
  <v-app>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content class="mx-2" align-content-center>
      <v-layout wrap row>
        <criteria/>
        <criteria/>
        <criteria/>
        <criteria/>
      </v-layout>
      <v-btn color="info" block>Apply search</v-btn>
    </v-content>
    <v-footer :fixed="fixed" app class="info" dark>
      <span class="ml-1">&copy; 2018, Nikola Stevanović</span>
    </v-footer>
  </v-app>
</template>

<script>
import Criteria from './components/Criteria'

export default {
  name: 'App',
  components: {
    Criteria
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Search by category'
    }
  }
}
</script>
