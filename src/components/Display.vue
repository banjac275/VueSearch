<template>
  <div>
    <v-input v-if="element === 'input'" class="inp"></v-input>
    <v-select 
    v-else-if="element === 'select'"
    :items="selectSource"
    item-text="name"
    color="blue"
    ></v-select>
    <v-slider 
    v-else-if="element === 'range'"
    color="blue"></v-slider>
    <div v-else class="inp"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['element', 'selectSource'],
  data() {
    return {
      display: ''
    }
  },
  computed: {
    ...mapGetters({
      getDimensions: 'getDimensions',
      getItemValues: 'getItemValues'
    })
  }
}
</script>

<style lang="scss" scoped>
.inp {
  height: 4.8rem;
}
</style>
