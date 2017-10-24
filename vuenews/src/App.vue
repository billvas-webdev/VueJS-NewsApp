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

  }
  #app {
    padding-top: 20px
  }
</style>
