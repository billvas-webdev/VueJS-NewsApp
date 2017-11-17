<template>

<div class="container">
      <WeatherWidget></WeatherWidget>
      <SourceSelection v-on:sourceChanged="sourceChanged"></SourceSelection>
      <Newslist v-bind:source="source"></Newslist>
      <FootComp></FootComp>
</div>

</template>

<script>
import WeatherWidget from '@/components/WeatherWidget'
import SourceSelection from '@/components/SourceSelection'
import Newslist from '@/components/Newslist'
import FootComp from '@/components/FootComp'



export default {
  name: 'app',
  components: {
    WeatherWidget,
    SourceSelection,
    Newslist,
    FootComp,



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

<style scoped>
 .container{
   padding:0;

  }
   @media (max-width: 1200px){

  .container {

    width: 70em;
    padding-left: 0px;
    padding-right: 0px;
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
@media (max-width: 360px){

  .container {
    width: auto;

  }
  .media-object {

    width: auto;

  }
  a{
    font-size: 2em;
  }
  i{
    font-size: 1em;
  }
   p{

    font-size: 3em;
  }


}


</style>




