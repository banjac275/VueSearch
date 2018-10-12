<template>
  <v-flex xs12 sm2 d-flex class="mx-1">
    <v-layout column>
      <v-select
        :items="items"
        label="Criteria"
      ></v-select>
      <v-input class="input">
      </v-input>
      <v-layout>
        <v-btn>include</v-btn>
        <v-btn>exclude</v-btn>
      </v-layout>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      items: ['item']
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  border-bottom: 1px solid #999;
}
</style>
