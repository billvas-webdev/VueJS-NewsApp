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
    width: 20em;
    border-radius: 55px;
    height: auto;
    padding: 20px;
  }
  .media {
    border-top: 1px solid lightgray;
    padding: 20px 10px 20px 10px;
  }

  li.media{

    background-color: #131313;
    border-radius: 25px;
    width: 100%;
  }

  .newslist {

    color:azure;
    font-size: 2.3rem;
  }
  a {

    font-size: 2.75rem;
  }
  h4 {
    padding-top: 55px;
  }
  h5 {
    font-size: 1.75rem;
  }


</style>
