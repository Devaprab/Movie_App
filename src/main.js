import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router';
import App from './App.vue'
import store from './store.js';
import "bootstrap/dist/css/bootstrap.css";
import CarouselCard from './components/CarouselCard.vue'
import MovieDetails from './components/MovieDetails.vue'
import MovieList from './components/MovieList.vue'
import TopRated from './components/TopRated.vue'
import CardItem from './components/CardItem.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/Home', component:CarouselCard, alias:'/' },
        { 
          path: '/MovieDetails/:id',
          name: 'MovieDetails',
          component: MovieDetails,
          props: true,
        },
        {
          path: '/MovieList',
          name:'MovieList',
          component: MovieList,
          

        },
        {
          path:'/TopRated',
          name: 'TopRated',
          component: TopRated,
        },
        {
          path: '/popularMovies',
          component: CardItem
        }
    ],
    scrollBehavior(_, _2, savedPosition) {
        if (savedPosition) {
          return savedPosition;
        }
        return { left: 0, top: 0 };
      }
});

const app = createApp(App)

app.use(router);

app.use(store);

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js";
