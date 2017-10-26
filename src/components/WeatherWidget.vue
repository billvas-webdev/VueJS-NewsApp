<template>
<div class="jumbotron">
    <weather
        api-key="a1a5357a4bc875aba578cf0eec58ab94"
        title="Weather for Seattle, Washington"
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
}
</script>
<style scoped>
  .jumbotron {
    background-color: yellow;

  }

</style>
