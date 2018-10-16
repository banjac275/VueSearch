<template>
  <v-flex xs12 sm3 class="px-1 mt-2 criteria">
    <v-layout column>
      <v-select
        :items="getDimensions"
        v-model="selected"
        item-text="name"
        label="Criteria"
        color="blue"
      ></v-select>
      <display-element 
      :element="displayElement" 
      :selectSource="selSrc" 
      @textFilled="textHandler($event)"
      @selectedOption="selectedHandler($event)"
      @sliderSet="sliderHandler($event)"
      />
      <v-layout v-if="selected" row justify-center class="btn-container">
        <v-btn class="btn" :class="includeFlag ? ' btn--clicked' : ''" :disabled="includeFlag" @click="excludeFlag = includeFlag; includeFlag = !includeFlag">include</v-btn>
        <v-btn class="btn" :class="excludeFlag ? ' btn--clicked' : ''" :disabled="excludeFlag" @click="includeFlag = excludeFlag; excludeFlag = !excludeFlag">exclude</v-btn>
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
      selected: null,
      displayElement: '',
      selSrc: [],
      changedState: false,
      excludeFlag: false,
      includeFlag: false,
      textRecv: null,
      slideRecv: null,
      selectRecv: null,
      retData: {}
    }
  },
  methods: {
    textHandler(data) {
      this.sendBackData(data)
    },
    selectedHandler(data) {
      this.sendBackData(data)
    },
    sliderHandler(data) {
      this.sendBackData(data)
    },
    sendBackData(data) {
      this.retData = {}
      this.retData.data = data
      this.retData.selected = this.selected
      this.retData.include = this.includeFlag;
      this.$emit('responseData', this.retData)
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
    selected() {
      this.alterDisplay(this.selected)
      this.changedState = true
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
  &:hover {
    background-color: transparent !important;
  }
  &--clicked:disabled {
    color: #ff0000 !important;
  }
}
</style>
