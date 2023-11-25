<template>
<!-- movie-details-area -->
     <section class="movie-details-area" >
                <div class="container">
                    <div class="row align-items-center position-relative">
                        <div class="col-xl-3 col-lg-4">
                            <div class="movie-details-img">
                                <img :src="'https://image.tmdb.org/t/p/w500/' + movieDetails.poster_path">
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-8">
                            <div class="movie-details-content">
                                <h2>{{ movieDetails.title }}</h2>
                                <div class="banner-meta">
                                    <ul>
                                        <li class="quality">
                                            <span>{{ displayRating(movieDetails.vote_average) }}</span>
                                        </li>
                                        <li class="category">
                                            <span>Language :</span>
                                            <span> &nbsp;{{ movieDetails.original_language }}</span>
                                        </li>
                                        <li class="release-time">
                                            <span><i class="far fa-calendar-alt"></i> {{ movieDetails.release_date }}  &nbsp;</span>
                                            <span><i class="far fa-clock"></i> {{ movieDetails.runtime }}mins</span>
                                        </li>
                                    </ul>
                                </div>
                                <p>{{ movieDetails.overview }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            <!-- movie-details-area-end -->
        </template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      movieDetails: {},
    };
  },
  methods: {
    displayRating(voteAverage) {
      const rating = Math.round(voteAverage / 2); // Convert to a 5-star scale
      const fullStars = '★'.repeat(rating);
      const emptyStars = '☆'.repeat(5 - rating);
      return `${fullStars}${emptyStars}`;
    },
    
  },
  async mounted() {
    // Fetch movie details using the ID from the route params
    const movieId = this.$route.params.id;
    let response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=83b97b9cc5e49a305bad52fe127f9408`);
    this.movieDetails = response.data;
  },
};
</script>

 <style scoped>
.movie-details-area {
    background-position: top center;
    background-size: cover;
    padding: 175px 0 120px;
    color: white;
}

.movie-details-img img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
}
.movie-details-content {
    margin-left: 23px;
}
.movie-details-content h5 {
    font-size: 26px;
    margin-bottom: 10px;
    color: #e4d804;
}
.movie-details-content h2 {
    font-size: 60px;
    margin-bottom: 20px;
}
.movie-details-content .banner-meta {
    margin-bottom: 15px;
}
.movie-details-content h2 > span {
    color: #e4d804;
}
.movie-details-content p {
    margin-bottom: 0;
} 


</style> 