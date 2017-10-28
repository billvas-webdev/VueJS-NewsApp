<template>
  <div class="container" id="app">
    <WeatherWidget></WeatherWidget>
    <SourceSelection v-on:sourceChanged="sourceChanged"></SourceSelection>
    <Newslist v-bind:source="source"></Newslist>

  </div>
</template>
<script>
import WeatherWidget from './components/WeatherWidget'
import SourceSelection from './components/SourceSelection'
import Newslist from './components/Newslist'
export default {
  name: 'app',
  components: {
    WeatherWidget,
    SourceSelection,
    Newslist

  },
  data () {
    return {
      source: ""
    }
  },
  methods: {
    sourceChanged: function (source) {
      this.source = source;
    }
  }
}
</script>
<style>

  body {


    background-color: #2c2c32;
    /*background: #000000;  /* fallback for old browsers */
    /*background: -webkit-linear-gradient(to top, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
    /*background: linear-gradient(to top, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



    background-size: cover;


  }
  #app {
    padding-top: 20px
  }

  @media (min-width: 1200px){

  .container {

    width: 110rem;
  }
}
@media (max-width: 992px){

  .container {
    width: 125rem;
  }
}
@media (max-width: 768px){

  .container {
    width: 110rem;
  }
  .media-object {
    height: 23rem;
  }
  a {
    font-size: 2.5rem;
  }

}

@media (max-width: 360px){

  .container {
    width: 100px;
  }
}
</style>
