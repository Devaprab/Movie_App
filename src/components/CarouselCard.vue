<template>
  <div class="carousel-inner">
    <div class="carousel-item active">
      
      <img src="../assets/cardimg.jpg" class="d-block w-100">
      <div class="card-img-overlay">
        <p class="text">Unlimited <span>Movie</span>,<br> TVs Shows, & More.</p>
      </div>
    </div> 
  </div>
</template>

<style scoped>
img {
  width: 100%;
}
.text {
  padding-top: 200px;
  padding-bottom: 200px;
  font-size: 100px;
  color: white;
}
span {
  color: yellow;
}
.banner-bg{
  background-image: url('../assets/movie3.jpg');
  width: 100%;
  height:500px
}

@media screen and (max-width: 976px) {
  .text {
  padding-top: 150px;
  padding-bottom: 150px;
  font-size: 80px;
}
}

@media screen and (max-width: 710px) {
  .text {
  padding-top: 125px;
  padding-bottom: 125px;
  font-size: 60px;
}
}

@media screen and (max-width: 540px) {
  .text {
  padding-bottom: 100px;
    font-size: 30px;
}
}

@media screen and (max-width: 380px) {
  .text {
    padding-top: 80px;
  padding-bottom: 100px;
    font-size: 20px;
}
}

</style>