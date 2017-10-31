<template>
<!--<div class="animated zoomIn">
  <transition name="zoomIn">
          <div v-if="show"></div>
        </transition>-->
  <div class="container" id="app">
    <iView></iView>
    <WeatherWidget></WeatherWidget>
    <SourceSelection v-on:sourceChanged="sourceChanged"></SourceSelection>
    <Newslist v-bind:source="source"></Newslist>
    <CircleMenu></CircleMenu>
  </div>
  </div>
</template>
<script>
import WeatherWidget from './components/WeatherWidget'
import SourceSelection from './components/SourceSelection'
import Newslist from './components/Newslist'
import CircleMenu from './components/VueCircleMenu'
import iView from './components/iView'

export default {
  name: 'app',
  components: {
    WeatherWidget,
    SourceSelection,
    Newslist,
    CircleMenu,
    iView


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


    background-color: #263140;
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
    padding-left: 5px;
    padding-right: 5px;
  }
}
@media (max-width: 992px){

  .container {
    width: 125rem;
  }
}
@media (max-width: 768px){

  .container {
    width: 65em;
    zoom: 30%;


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
    width: 40em;
    zoom: 20%;
  }
  .jumbotron {
    height: 20em;
  }
}
</style>
