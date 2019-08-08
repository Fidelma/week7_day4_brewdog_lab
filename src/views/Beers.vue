<template lang="html">
  <div class="">

  <beer-list :beers="beers" ></beer-list>
  <button type="button" @click="handleClick">Add to Favourites</button>
</div>
</template>

<script>
import BeerList from '@/components/BeerList'
import {eventBus} from '../main.js';

export default {
  data(){
    return {
      beers: [],
      selectedBeer: null
    }
  },

  mounted(){
    fetch('https://api.punkapi.com/v2/beers')
      .then(response => response.json())
      .then(beers => this.beers = beers)

      eventBus.$on('beer-changed', (beer) => {
        this.selectedBeer = beer;
      })
  },

  components: {
    'beer-list': BeerList
  },

  methods: {
    handleClick () {
      eventBus.$emit('favourite-selected', this.selectedBeer)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
