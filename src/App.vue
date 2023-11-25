<template>
  <home-page></home-page>
  <card-item ></card-item>
  <footer-card></footer-card>
</template>

<script>
import HomePage from './components/HomePage.vue';
import CardItem from './components/CardItem.vue';
import FooterCard from './components/FooterCard.vue';


export default {
  name: 'App',
  components: {
    CardItem,
    HomePage,
    FooterCard
  },
}
</script>

<style>
body {
  background-color: black;
}
</style>

