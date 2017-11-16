<template>

    <div class="container">
      <div class="primary col-md-12 col-sm-12 col-xs-12">
        <img src="../assets/weather.png" class="img-responsive" id="weather-icon" height= "165" width= "155" alt="Cloud image">
         <img src="../assets/news.png" class="img-responsive" id="news-icon" height= "135" width= "130" alt="Cloud image">
        <h1>About Daily News and Weather</h1>
        </div>

            <div class="content"><p>This project is a responsive web application that leverages Vue JS, Vue Resource, Node JS, News API, Dark Ski API, Bootstrap, JQuery, and Google Analytics. Hosted on a secure network to allow for geolocation for local weather updates. It also provides up to the minute news content from over 50 news sources and access to the news organization's websites.
                </p>
            </div><!--//container-->
          </div><!--//content-->
        </div><!--//bootstrap sizing-->

</template>

<script>
  export default {
    name: 'About'
}

</script>

<style scoped>
/* ======= Base ======= */
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  text-align: center;
  text-shadow: 1px .25px 0 #FFFFFF;

}
p{
  text-shadow: 1px .25px 0 #FFFFFF;
}
.container{

  text-align:center;
    height: 20em;
    width: auto;
    padding: 2.5em 9.5em 1em 9.5em;
    border-top: 1px solid #f8b500;
    border-radius: .5em;
    /*background-color: #3491e4;*/
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
    font-size: 1.35em;
    background: #fff1e5;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #1576cc, #F0F2F0);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #1576cc, #F0F2F0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#weather-icon{
  float:left;
  /*-webkit-filter: invert(80%);
  filter: invert(80%);*/

}
#news-icon{
  -webkit-filter: invert(20%);
  filter: invert(20%);
  float: right;
}

</style>
