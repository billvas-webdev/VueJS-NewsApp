<template>
<div class="jumbotron">
    <weather
        api-key="a1a5357a4bc875aba578cf0eec58ab94"
        title="Weather Forecast"
        latitude="47.671081"
        longitude="-122.326071"
        language="en"
        units="us">

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
  .fe_container{
    color:#163761;
  }
  .jumbotron {

    color:#163761;
    height: 20em;
    zoom: 155%;
    padding: 1em;
    border-top: 1px solid lightgray;
    border-radius: .5em;
    background: #fceabb;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #f8b500, #fceabb);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #f8b500, #fceabb); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
@media (max-width: 360px){

  .jumbotron  {
     zoom: 170%;
     height: 15em;

  }
}

</style>
