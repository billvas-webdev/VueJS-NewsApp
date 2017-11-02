<template>
<!--<div class="animated zoomIn">
  <transition name="zoomIn">
          <div v-if="show"></div>
        </transition>-->

  <div class="container" id="app">

    <HeadNav></HeadNav>
    <WeatherWidget></WeatherWidget>
    <SourceSelection v-on:sourceChanged="sourceChanged"></SourceSelection>
    <Newslist v-bind:source="source"></Newslist>
    <Footer></Footer>

  </div>

</template>
<script>
import HeadNav from './components/HeadNav'
import WeatherWidget from './components/WeatherWidget'
import SourceSelection from './components/SourceSelection'
import Newslist from './components/Newslist'
import Footer from './components/Footer'



export default {
  name: 'app',
  components: {
    WeatherWidget,
    SourceSelection,
    Newslist,
    HeadNav,
    Footer,



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

    font-family: 'Lato', arial, sans-serif;
    background-color: #263140;
    /*background: #000000;  /* fallback for old browsers */
    /*background: -webkit-linear-gradient(to top, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
    /*background: linear-gradient(to top, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



    background-size: cover;


  }
  #app {
    padding: 10px 0 10px 0;
  }
  .jumbotron{
    margin-bottom: 7px;
  }
.container .jumbotron{
  height: 30em;
}

  @media (max-width: 1200px){

  .container {

    width: 90em;
    padding-left: 5px;
    padding-right: 5px;
  }
}
@media (max-width: 1024px){
.container {
    width: auto;
  }
}


@media (max-width: 992px){

  .container {
    width: auto;
  }
}
@media (max-width: 768px){

  .container {
    width: auto;
    zoom: 60%;
  }



  .media-object {
    zoom: 100%;
    height: 23rem;
  }
  a {
    font-size: 2.5rem;
  }

}

@media (max-width: 375px){

  .media-object {

    width: auto;

  }
  a{
    font-size: 1em;
  }
  i{
    font-size: 1em;
  }
   p{

    font-size: 30em;
  }



  .container {
    width: auto;
    zoom: 30%;
  }

}
</style>
