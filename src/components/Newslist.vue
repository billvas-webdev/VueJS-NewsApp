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
  name: 'newslist',
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



  .media-object {
    max-width: 20em;
    border-radius: 2em;
    max-height: 15em;
    padding: 20px;
  }
  .media {
    border-top: 1px solid #f8b500;
    /*padding: 20px 20px 20px 20px;*/
  }

  li.media{
    background-color: #131313;
    background: #000000;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #201f23, #000000);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #201f23, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-radius: .5em;
    width: 100%;
  }

  .newslist {

    color:azure;
    font-size: 2.3rem;
  }
  a {
    color:#299cff;

  }
  p{
    line-height: 1.25em;
    padding-right: 1.5em;
    font-size: 1.2em;
    font-weight: normal;

}
  h4 {
    line-height: 1em;
    font-size: 1.4em;
    padding-top: 46px;
  }
  h5 {
    line-height: 1.5em;
    font-size: 1.75rem;
    color: #f8b500;
  }
@media (max-width: 360px){
  .container{
    height: 13.5em;
  }
  li.media  {
    height: 14em;

  }
  .media-object {
    max-width: 15em;
    max-height: 12em;
}
 a {
    line-height: 1em;
    font-size: 1.55em;
    padding-top: 0;
  }
 p{
    line-height: 1.1em;
    font-size: 1.45em;
    padding-bottom: 1em;
 }

}
@media (max-width: 568px){
  .container{
    height: 16.5em;
  }
  li.media  {
    height: 15.5em;
  }
  h5 {
    line-height: 1.5em;
    font-size: 1.15em;

  }
  a {
    line-height: 1em;
    font-size: 1.1em;
    padding-top: 0;
  }

  .media-object {
    max-width: 15em;
    max-height: 14em;
}
p{
    line-height: 1.1em;
    font-size: 1.3em;
    padding-bottom: 1em;
 }
}

@media (max-width: 320px){
  .container{
    height: 16.5em;
  }
  li.media  {
    height: 15em;
  }
  a {
    line-height: 1em;
    font-size: 1.2em;
    padding-top: 0;
  }

  .media-object {
    max-width: 18em;
    max-height: 15em;
}
p{
    line-height: 1.1em;
    font-size: 1.55em;
    padding-bottom: 1em;
 }
}

@media (max-width: 768px){
  .container{
    height: 13.5em;
  }
  li.media  {
    height: 14em;

  }
  .media-object {
    max-width: 15em;
    max-height: 11em;
}
h5 {
    line-height: 1.5em;
    font-size: 1.25em;

  }
 a {
    line-height: 1em;
    font-size: 1.3em;
    padding-top: 0;
  }
 p{
    line-height: 1.1em;
    font-size: 1.8em;
    padding-bottom: 1em;
 }

}

</style>
