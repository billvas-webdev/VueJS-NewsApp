<template>

<div class="jumbotron">
    <weather
        api-key="a1a5357a4bc875aba578cf0eec58ab94"
        title="Local Weather Forecast"
        latitude="47.671081"
        longitude="-122.326071"
        language="en"
        units="us"
        bar-color="#2b3b50"
        text-color="#072137">

    </weather>
</div>


</template>

<script>
import VueWeatherWidget from 'vue-weather-widget';
import 'vue-weather-widget/dist/css/vue-weather-widget.css';

export default {
    components: {
        'weather': VueWeatherWidget
    },

    created () {
      if(navigator.geolocation){
         navigator.geolocation.getCurrentPosition(position => {
          this.lat = position.coords.latitude;
          this.lon = position.coords.longitude;
        });
      }
    }
  }
</script>
<style scoped>


  .jumbotron {

    color:#163761;
    height: 18em;
    zoom: 143%;
    padding: 1em;
    border-top: .5px solid #f8b500;
    border-radius: .5em;
    background: #fceabb;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #f8b500, #fceabb);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #f8b500, #fceabb); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
@media (max-width: 359px) and (min-width: 320px){
  .jumbotron  {
     zoom:100%;
     height: 18em;

  }
}
@media (max-width: 399px) and (min-width: 359px){
  .jumbotron  {
     zoom:100%;
     height: 18em;

  }
}

@media (max-width: 639px) and (min-width: 400px){

  .jumbotron  {
     zoom:85%;
     height: 18em;

  }
}
@media only screen and (max-width: 732px) and (min-width: 640px){

  .jumbotron {
    zoom: 120%;
  }
}
@media only screen and (max-width: 991px) and (min-width: 733px){

  .jumbotron {
    zoom: 120%;
  }
}



</style>
