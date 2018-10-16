<template>
  <div>
    <v-text-field
    v-if="element === 'input'" 
    color="blue"
    v-model="textFilled"
    label="Insert value"
    ></v-text-field>
    <v-select 
    v-else-if="element === 'select'"
    :items="selectSource"
    item-text="name"
    v-model="selectedOption"
    color="blue"
    ></v-select>
    <v-slider 
    v-else-if="element === 'range'"
    v-model="sliderSet"
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
      textFilled: '',
      selectedOption: '',
      sliderSet: ''
    }
  },
  computed: {
    ...mapGetters({
      getDimensions: 'getDimensions',
      getItemValues: 'getItemValues'
    })
  },
  watch: {
    textFilled() {
      this.$emit('textFilled', this.textFilled)
    },
    selectedOption() {
      this.$emit('selectedOption', this.selectedOption)
    },
    sliderSet() {
      this.$emit('sliderSet', this.sliderSet)
    }
  }
}
</script>

<style lang="scss" scoped>
.inp {
  height: 8.4rem;
  &--bottom {
    border-bottom: 2px solid #07a6f0;
  }
}
</style>
