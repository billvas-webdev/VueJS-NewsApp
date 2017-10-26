<template>
  <div class ="sourceselection">
    <div class="jumbotron">

  <h2><span class="glyphicon glyphicon-list-alt"></span> News List</h2>
    <h4>Select News Source</h4>
    <select class="form-control" v-on:change="sourceChanged">
    <option v-bind:value="source.id" v-for="source in sources">{{source.name}}</option>
    </select>
    <div v-if="source">
      <h6>{{source.description}}</h6>
      <a v-bind:href="source.url" class="btn btn-primary" target="blank">Go To {{source.name}} Website</a>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'sourceselection',
    data () {
      return {
        sources: [],
        source: ''
    }
  },
  methods: {
    sourceChanged: function (e) {
      for (var i=0; i<this.sources.length; i++) {
        if (this.sources[i].id == e.target.value) {
          this.source = this.sources[i];

      }
    }
    this.$emit('sourceChanged', e.target.value);
    }
  },

created: function () {
  this.$http.get('https://newsapi.org/v1/sources?language=en')
      .then(response => {
        this.sources = response.data.sources;
      });

  }
}
</script>

<style scoped>
  .jumbotron {
    background-color: #3491e4;
    font-family: "helvetica", "georgia", "times";
}

  h2{

    font-size: 4rem;
}
  h4{
    font-size: 2rem;
  }
  h6{
    font-size: 1.5rem;
  }
  .btn-primary{
    font-size: 1.4rem;
    border-color: 020d17;
    background-color:#333;

  }

  select.form-control {
  font-style: "helvetica", "georgia", "times";
  font-size: 1.8rem;
  height: 4.2rem;

}
  </style>
