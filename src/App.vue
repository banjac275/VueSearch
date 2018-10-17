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
        <criteria @responseData="handleRetData($event, 1)"/>
        <criteria @responseData="handleRetData($event, 2)"/>
        <criteria @responseData="handleRetData($event, 3)"/>
        <criteria @responseData="handleRetData($event, 4)"/>
      </v-layout>
      <v-btn color="info" block @click="applied">Apply search</v-btn>
      <hr>
      <div id="resDiv"></div>
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
      title: 'Search by category',
      searchCriteria: {}
    }
  },
  methods: {
    applied() {
      let resDiv = document.getElementById('resDiv')
      let keys = Object.getOwnPropertyNames(this.searchCriteria)
      resDiv.innerHTML = ''
      keys.forEach(key => {
        if (key !== '__ob__') resDiv.innerHTML += `<div>${key}: data: ${this.searchCriteria[key].data} include: ${this.searchCriteria[key].include} selected: ${this.searchCriteria[key].selected}</div>`
      })
    },
    handleRetData(data, field) {
      this.searchCriteria[field] = data
    }
  }
}
</script>
