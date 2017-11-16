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
import About from '@/components/About'


export default {
  name: 'app',
  components: {
    WeatherWidget,
    SourceSelection,
    Newslist,
    FootComp,
    About

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


</style>




