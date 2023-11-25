<template>
  <h1>Popular Movies</h1>
    <div class="main-div">
        <div v-for="list in lists" :key="list.id" class="card-container">
    <div class="main-card">
    <div class="card bg-dark text-light">
  <img :src="'https://image.tmdb.org/t/p/w500/' + list.poster_path" class="card-img" alt="cardImg" >
  <div class="card-img-overlay description">
    <h5 class="card-title lh-1"> {{ list.title }} </h5>
    <p class="card-text description lh-1">{{ list.overview }}</p>
    <router-link :to="{ name: 'MovieDetails', params: { id: list.id } }"   class="card-text" @click="this.$store.commit('setVisibilityFalse')" >View Details</router-link>
  </div>
</div>
</div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      lists:[],
    };
  },
  async mounted() {
    try{
    let response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=83b97b9cc5e49a305bad52fe127f9408');
    this.lists = response.data.results;
    }catch(error) {
      alert('Movies not found');
    }
  },
}
  
</script>

<style scoped>
.card-img {
    opacity: 100%;
}

.main-card:hover .card-img {
    opacity: 25%;
}

.card{
    width: 200px;
    height: 300px;
    position: relative; /* Required for absolute positioning */
}

.card-text {
  font-size: 10px;
} 

.card-img-overlay {
  display: none; /* Initially hide the description */
}

h1{
  color: white;
  padding-top: 50px;
}


.main-card:hover .card-img-overlay {
  display: block; /* Show the description on hover */
}


.main-card {
    padding: 50px;
    margin: 10px;
}

.main-card:hover {
    cursor: pointer;
    transform: scale(1.1);
}


.main-div {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.main-div::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/pattern16.jpg');
  opacity: 25%; /* Adjust the opacity as needed */
  z-index: -1; /* Place the overlay behind other content */
}

.card-container {
    flex: 0 0 calc(25% - 20px); /* 25% width with a bit of margin */
}


</style>