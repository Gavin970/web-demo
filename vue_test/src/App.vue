<template>
  <div>
<<<<<<< HEAD
    <div class="row">
      <Banner></Banner>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
=======
    <TwentyEight></TwentyEight>
>>>>>>> efa5841df4c3ac1786828b19374b40963cec0e60
  </div>
</template>

<script>
<<<<<<< HEAD
import About from './pages/About.vue'
import Home from './pages/Home'
import Banner from './components/Banner'
export default {
  name: 'App',
  components: { About, Home, Banner },
};
</script> 
=======
  import TwentyEight from "./components/TwentyEight";
  export default {
    components: {
      TwentyEight
    },
    name: "App"
  };
</script>
>>>>>>> efa5841df4c3ac1786828b19374b40963cec0e60

<style>
  * {
    padding: 0;
    margin: 0;
  }
</style>