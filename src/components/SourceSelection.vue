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
    padding:1em;
    zoom: 175%;
    height: 17em;
    border-top: 1px solid lightgray;
    border-radius: 2.25em;
    /*background-color: #3491e4;*/
    font-family: Helvetica, Arial, sans-serif;
    background: #F0F2F0;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #1576cc, #F0F2F0);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #1576cc, #F0F2F0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

  h2{
    text-align: center;
    font-weight: bold;
    font-size: 3.5rem;
}
  h4{

    text-align: center;
    font-size: 2rem;
  }
  h6{

    font-size: 1rem;
  }
  .btn-primary{
     display:block; /* change this from inline-block */
    width:40%; /* setting the width */
    margin:0 auto; /* this will center  it */
    position:relative;
    font-style:normal;
    font-weight:normal;
    font-family:"Open Sans";
    font-size:14px;
    outline:none;
    color:#fff;
    border:none;
    text-decoration:none;
    text-align:center;
    cursor:pointer;
    -webkit-border-radius:2px;
    -moz-border-radius:2px;
    border-radius:2px;
    background-color:#163761;
    border-bottom:1px solid #f8b500;
  }

  select.form-control {
  font-style: "helvetica", "georgia", "times";
  font-size: 1.5rem;
  height: 2em;
}

  .glyphicon {
    top:4px;
    font-weight: bolder;

}
  </style>
