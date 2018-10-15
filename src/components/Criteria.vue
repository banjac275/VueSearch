<template>
  <v-flex xs12 sm3 class="px-1 mt-2">
    <v-layout column>
      <v-select
        :items="getDimensions"
        v-model="selected"
        item-text="name"
        label="Criteria"
        color="blue"
      ></v-select>
      <display-element :element="displayElement" :selectSource="selSrc"/>
      <v-layout row justify-center>
        <v-btn class="btn" @click="toggleRed">include</v-btn>
        <v-btn class="btn" @click="toggleRed">exclude</v-btn>
      </v-layout>
    </v-layout>
  </v-flex>
</template>

<script>
import { mapGetters } from 'vuex'
import Display from './Display'

export default {
  components: {
    'display-element': Display
  },
  data() {
    return {
      selected: '',
      displayElement: '',
      selSrc: []
    }
  },
  methods: {
    toggleRed() {
    },
    alterDisplay(elem) {
      switch(elem) {
        case 'Gender': {
          this.selSrc = this.getGenders
          break
        }
        case 'Age group': {
          this.selSrc = this.getAgeGroups
          break
        }
        case 'Brand':
        case 'BrandCategory':
        case 'BrandSubcategory': {
          this.selSrc = this.getItemValues
          break
        }
      }
      this.getDimensions.forEach(el => {
        if (el.name == elem) {
          switch (el.display) {
            case 'input': {
              this.displayElement = 'input'
              break
            }
            case 'select': {
              this.displayElement = 'select'
              break
            }
            case 'range': {
              this.displayElement = 'range'
              break
            }
          }
        }
      });
    }
  },
  computed: {
    ...mapGetters({
      getDimensions: 'getDimensions',
      getAgeGroups: 'getAgeGroups',
      getItemValues: 'getItemValues',
      getGenders: 'getGenders'
    })
  },
  watch: {
    selected(val) {
      this.alterDisplay(this.selected)
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  border-bottom: 1px solid #999;
}

.btn {
  background: transparent !important;
  box-shadow: none !important;
  &--clicked {
    color: #ff0000;
  }
}
</style>
