<template lang="html">
  <beer-list :beers="favouriteBeers"></beer-list>

</template>

<script>
import BeerList from '@/components/BeerList'
import {eventBus} from '../main.js';

export default {
  data(){
    return {
      favouriteBeers: []
    }
  },

  components: {
    'beer-list': BeerList
  },

  mounted(){
    eventBus.$on('favourite-selected', (beer) => {
      this.favouriteBeers.push(beer);
    })
  }
}
</script>

<style lang="css" scoped>
</style>
