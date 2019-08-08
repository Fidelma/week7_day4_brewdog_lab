<template>
  <div id="app">
    <beer-list :beers="beers" ></beer-list>
  </div>
</template>

<script>
import BeerList from './components/BeerList.vue'

export default {
  name: 'app',

  data(){
    return {
      beers: []
    }
  },

  mounted(){
    fetch('https://api.punkapi.com/v2/beers')
    .then(response => response.json())
    .then(beers => this.beers = beers)
  },

  

  components: {
    "beer-list": BeerList
  }
}


</script>

<style>

</style>
