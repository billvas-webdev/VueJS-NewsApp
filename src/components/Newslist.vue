<template>


  <div class="newslist">
   <div class="flex-container">
      <ul class="media-list">
        <li class="media" v-for="article in articles">
          <div class="media-left">
            <a v-bind:href="article.url" target="_blank">
              <img class="media-object" v-bind:src="article.urlToImage">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading"><a v-bind:href="article.url" target="_blank">{{article.title}}</a></h4>
            <h5><i>by {{article.author}}</i></h5>
            <p>{{article.description}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  </div>


</template>
<script>
export default {
  name: 'Newslist',
  props: ['source'],
  data () {
    return {
      articles: []
    }
  },
  methods: {
    updateSource: function (source) {
      this.$http.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=30fdd9c8493742eebe75a786fc36f1bd')
       .then(response => {
         this.articles = response.data.articles;
       });
    }
  },
  created: function () {
    this.updateSource(this.source);
  },
  watch: {
    source: function (val) {
      this.updateSource(val);
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
   color:#299cff;

  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
}
a:hover {
  text-decoration: underline;
  color: #ffadad;

}
a:focus {
  text-decoration: none;
}

  .media-object {
    max-width: 45rem;
    border-radius: 2em;
    max-height: 16em;
    padding: 1em;
  }
  .media {
    border-top: .5px solid #f8b500;
    /*padding: 20px 20px 20px 20px;*/
  }

  li.media{

    background-color: #131313;
    background: #000000;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #201f23, #000000);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #201f23, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-radius: .5em;
    width: auto;
    height: 30.75rem;

  }

  .newslist {
    -webkit-transition: all 1.4s ease-in-out;
  -moz-transition: all 1.4s ease-in-out;
  -ms-transition: all 1.4s ease-in-out;
  -o-transition: all 1.4s ease-in-out;
    color:azure;
    font-size: 2.25rem;
  }

  p{
    line-height: 1.25em;
    padding-right: 1.5em;
    font-size: 1.2em;
    font-weight: normal;

}
  h4 {
    line-height: 1em;
    font-size: 1.35em;
    padding-top: 1em;
  }
  h5 {
    line-height: 1.5em;
    font-size: 1.75rem;
    color: #f8b500;
  }

/********* Samsung Galaxy S5 ************/
@media (max-width: 319px) and (min-width: 150px){

  li.media  {
    padding: .5rem 2.25rem 0rem 2.5rem;
    height: 52rem;

  }
  .media-object {
    display: none;

}
 h4 {
    text-align: center;
    line-height: 1em;
    font-size: 2.6rem;

  }
 p{
    line-height: 1.1em;
    font-size: 2.6rem;

 }

}
@media (max-width: 359px) and (min-width: 320px){


  li.media  {
    height: 20.35em;
    padding: .5rem 2rem 0rem 2rem;
  }

  .media-object {
    display:none;

}
 h4 {
   text-align: center;
    line-height: 1em;
    font-size: 2.3rem;
 }
p{
    line-height: 2.4rem;
    font-size: 2.2rem;
    padding-bottom: 1em;
 }
}

@media (max-width: 413px) and (min-width: 360px){

  li.media  {
    height: 45rem;
     padding: .5rem 2.25rem 0rem 2.5rem;

  }
  .media-object {
    display: none;
    width: 150px;
    height: 150px;
}

 h4 {
   text-align: center;
    line-height: 1em;
    font-size: 2.35rem;
 }
 h5{
   font-size: 1.75rem;
 }
p{
    line-height: 2.45rem;
    font-size: 2.2rem;
    padding-bottom: 1em;
 }
}

@media (max-width: 568px) and (min-width: 414px){

  li.media  {
    height: 20em;

  }
  .media-object {
    padding: 3.5rem 0rem 0rem 2.5rem;
    border-radius:0;
    width: 25rem;
    height: auto;
}

 h4 {
    line-height: 1em;
    font-size: 2.1rem;
 }
 h5{
   font-size: 1.75rem;
 }
p{
  padding: -5rem 1rem 1.5rem 2rem;
    line-height: 2.45rem;
    font-size: 2rem;

 }
}

@media (max-width: 733px) and (min-width: 569px){

  li.media  {
    height: 26.1rem;
  }
  h4{
    font-size: 2.25rem;


  }
  h5 {
    line-height: 1.5em;
    font-size: 2rem;

  }
  .media-object {
    margin-top: 1.25rem;
    padding: 1.25rem 1rem 1rem 1rem;
    max-width: 37rem;
    max-height: auto;
}
p{
    line-height: 1.1em;
    font-size: 2.2rem;
    padding-bottom: 1em;
 }
}


@media (max-width: 991px) and (min-width: 734px){

  li.media  {
    height: 26rem;
  }
  h4{
    font-size: 2.25rem;


  }
  h5 {
    line-height: 1.5em;
    font-size: 2rem;

  }
  .media-object {
    margin-top: 1rem;
    padding: 1.25rem 1rem 1rem 1rem;
    max-width: 37rem;
    max-height: auto;
}
p{
    line-height: 1.1em;
    font-size: 2.2rem;
    padding-bottom: 1em;
 }
}


@media (max-width: 2319px) and (min-width: 1200px){

  li.media  {
    height: 38.5rem;

  }
  h4{
    font-size: 3rem;


  }
  h5 {
    line-height: 1.5em;
    font-size: 2.25rem;

  }
  .media-object {
    margin-top: 1.5rem;
    padding: 1.25rem 1rem 1rem 1rem;
    max-width: 50rem;
    max-height: auto;


}
.media-object:hover{
  opacity: .7;
    transition: opacity .5s ease-out;
    -moz-transition: opacity .5s ease-out;
    -webkit-transition: opacity .5s ease-out;
    -o-transition: opacity .5s ease-out;
}
p{
    line-height: 1.1em;
    font-size: 2.75rem;
    padding-bottom: 1em;
 }
}

</style>
