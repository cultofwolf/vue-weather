<script setup>
import Navbar from "./components/Navbar.vue";
import MainComponent from "./components/MainComponent.vue";

import { ref, onMounted } from 'vue';
import { useStore } from "vuex";
import About from "./components/About.vue";

const store = useStore();

onMounted(()=>{
  store.dispatch('getWeather');
});


</script>

<template>
  <Navbar></Navbar>
  <div v-if="$store.state.toggle">
    <MainComponent></MainComponent>
  </div>
  <div v-else>
    <About></About>
  </div>

</template>

<style lang="scss">

</style>
