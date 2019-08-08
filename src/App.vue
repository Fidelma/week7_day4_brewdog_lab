<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'beers'}">Beers</router-link>
      <router-link :to="{ name: 'favourites'}">Favourties</router-link>

    </nav>
    <router-view id="view"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'


}


</script>

<style>

</style>
