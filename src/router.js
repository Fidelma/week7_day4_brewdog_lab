import Vue from 'vue';
import Router from 'vue-router';
import Beers from '@/views/Beers';
import Favourites from '@/views/Favourites'

Vue.use(Router)

const router = new Router ({
  routes: [
    {
      path: '/beers',
      name: 'beers',
      component: Beers
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: Favourites
    }
  ]
})


export default router;
