<template lang="html">
  <select v-on:change="handleChange" v-model="selectedBeer">
    <option v-for="beer in beers" :value="beer">{{beer.name}}</option>
  </select>
</template>

<script>
import {eventBus} from '../main.js';

export default {
  name: "beer-list",
  props: ['beers'],

  data(){
    return {
      "selectedBeer": {}
    }
  },

  methods: {
    handleChange() {
      eventBus.$emit('beer-changed', this.selectedBeer);
    }
  }


}
</script>

<style lang="css" scoped>
</style>
