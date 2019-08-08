<template lang="html">
  <select>
    <option v-for="beer in beers">{{beer.name}}</option>
  </select>
</template>

<script>
export default {
  name: "beer-list",
  props: ['beers']

  // data(){
  //   return {
  //     "selectedBeer": {}
  //   }
  // },


}
</script>

<style lang="css" scoped>
</style>
