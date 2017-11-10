<template>

  <div class ="sourceselection">
    <div class="jumbotron">

  <h2><span class="fa fa-newspaper-o"></span>Daily News</h2>
    <h4>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Select News Source</h4>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <select class="form-control" v-on:change="sourceChanged">
    <option v-bind:value="source.id" v-for="source in sources">{{source.name}}</option>
    </select>
    <div v-if="source">
      <h6>{{source.description}}</h6>
      <a v-bind:href="source.url" class="btn btn-lg btn-primary btn-block" target="blank">Go To {{source.name}} Website</a>
    </div>
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
    height: 16.8em;
    border-top: 1px solid #f8b500;
    border-radius: .5em;
    /*background-color: #3491e4;*/
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
    background: #F0F2F0;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #1576cc, #F0F2F0);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #1576cc, #F0F2F0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

  h2{

    text-shadow: 1px .5px 0 #f8b500;
    color:#072137;
    text-align: center;
    font-weight: bold;
    font-size: 3.5rem;
}
  h4{
    text-shadow: 1px .5px 0 #f8b500;
    color:#072137;
    text-align: center;
    font-size: 2rem;
    margin-top: -7px;
    margin-bottom: 5px;
  }
  h6{
    line-height: 1.1em;

    font-weight: 600;
    color:#072137;
    font-size: 1.05rem;
    padding:  0;
    margin-top: 7px;
    margin-bottom: 4px;

  }
  .btn-primary{
    display:block; /* change this from inline-block */
    width:55%; /* setting the width */
    margin:0 auto; /* this will center  it */

    font-style:normal;
    font-weight:normal;
    font-family: 'Montserrat','Lato', arial, sans-serif;
    font-size:1.1em;
    outline:#f8b500;
    color:#fff;
    border:none;

    text-align:center;
    border-radius:.5em;
    background-color:#072137;
    border:1px solid #f8b500;
  }

  select.form-control {
  color:#2b3b50;
  font-family: 'Montserrat','Lato', arial, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  height: 2em;
  background-color: #fff;
}

  .fa-newspaper-o {
    position:relative;
    font-size: 1.5em;
    top:1.2rem;
    right: 1rem;
    font-weight: bolder;

}



/******* IPHONE 6 ********/
@media (max-width: 375px){

  .jumbotron  {

     height: 16em;

  }

  h4{
    margin-bottom: .5em;
  }
  .fa-newspaper-o {
    font-size: 1.75em;
}

}
/***********   *************/
@media (max-width: 414px){
  .btn-primary{

    width:70%; /* setting the width */
  }
}


/*********** IPHONE 6 Landscape **********/
@media (max-width: 667px){

   .jumbotron  {

     height: 17em;

  }
}
/********** IPHONE PLUS Landscape **********/
@media (max-width: 736px){

   .jumbotron  {

     height: 17em;

  }
}
/******** TABLET IPAD LG ********/
@media (max-width: 768px){

   .jumbotron  {

     height: 17em;

  }
  h6{
    font-size: 1em;
  }
}
/******* IPAD Pro ********/
@media (max-width: 1024px){

   .jumbotron  {

     height: 17em;

  }
}


  </style>
