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
    border-top: 1px solid lightgray;
    border-radius: 2.25em;
    /*background-color: #3491e4;*/
    font-family: Helvetica, Arial, sans-serif;
    background: #F0F2F0;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #163761, #F0F2F0);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #163761, #F0F2F0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

  h2{

    font-weight: bold;
    font-size: 4rem;
}
  h4{
    font-size: 2rem;
  }
  h6{
    font-size: 1.75rem;
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

  .glyphicon {
    top:4px;
    font-weight: bolder;

}
  </style>
