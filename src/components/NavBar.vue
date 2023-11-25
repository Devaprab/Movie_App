<template>
<nav class="navbar navbar-expand-lg navbar-dark ">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/Home">
    <img src="../assets/logo.png"></router-link> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/Home" @click="this.$store.commit('setVisibilityFalse')">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/TopRated" @click="this.$store.commit('setVisibilityFalse')">Top-Rated</router-link>
        </li>
      </ul>
      <form class="d-flex">
      <input class="form-control me-2" v-model="movie" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-light" @click="searchMovies" type="button">Search</button>
    </form>
    </div>
  </div>
  

</nav>
 <movie-list :movies="movies" v-if="visibilityShow"></movie-list>    
</template>


  <script>
  import axios from 'axios';

  import MovieList from './MovieList.vue';
  
  export default {
    components: {
    MovieList
    },
    computed: {
      visibilityShow() {
        return this.$store.getters.showVisibility;
      }
    },
    data() {
      return {
        movie: '',
        showMovies: false,
        movies: [],
      };
    },
    methods: {
  async searchMovies() {
    console.log('Search button clicked');
    if (this.movie.trim() !== '') {
      const apiKey = '83b97b9cc5e49a305bad52fe127f9408';
      const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.movie}`;

      try {
        const response = await axios.get(apiUrl);

        // Check if there are search results
        if (response.data.results.length > 0) {
          this.movies = response.data.results;
          this.$store.commit('setVisibilityTrue');
          this.$router.push({ name: 'MovieList' });
        } else {
          // Handle case when there are no search results
          alert("Movie not found");
          this.$store.commit('setVisibilityFalse');
        }
      } catch (error) {
        console.log('Error fetching movies:', error);
        // Handle error, e.g., show an error message to the user
        this.$store.commit('setVisibilityFalse');
      }
    }
  },
},
  };
  </script>

<style scoped>


.navbar {
    position: fixed;
    z-index: 1;
    width: 100%;
  }

.btn {
  background-color: white;
}


</style>

