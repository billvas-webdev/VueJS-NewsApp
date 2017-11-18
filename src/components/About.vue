<template>

    <div class="container">
      <div class="primary col-md-12 col-sm-12 col-xs-12">
        <img src="../assets/news.png" class="img-responsive" id="news-icon" height= "130" width= "127" alt="Newspaper image">
         <img src="../assets/weather.png" class="img-responsive" id="weather-icon" height= "165" width= "155" alt="Cloud image">
        <h1>Daily News and Weather</h1>


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

  text-shadow: -1px .25px 0 #FFFFFF;

}
p{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight:900 ;
  /*text-shadow: -1px .25px 0 #FFFFFF;*/
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
    animation: colorchange 5s; /* animation-name followed by duration in seconds*/
        /* you could also use milliseconds (ms) or something like 2.5s */
    -webkit-animation: colorchange 5s; /* Chrome and Safari */
    }
    @keyframes colorchange
    {
      0%   {background: lightgoldenrodyellow;}
      25%  {background: #f8b500;}
      50%  {background: orange;}
      75%  {background: lightcoral;}
      100% {background: lightgrey;}
    }

    @-webkit-keyframes colorchange /* Safari and Chrome - necessary duplicate */
    {
       0%   {background: lightgoldenrodyellow;}
      25%  {background: #f8b500;}
      50%  {background: orange;}
      75%  {background: lightcoral;}
      100% {background: lightgrey;}
    }

#weather-icon{
  float:right;

  /*-webkit-filter: invert(80%);
  filter: invert(80%);*/

}
#news-icon{
  -webkit-filter: invert(20%);
  filter: invert(20%);

  float: left;
}

/******* IPHONE 6 ********/
@media (max-width: 375px){

  .container  {
    padding: 0.5em 0.5em 1em 0.5em;


  }
}
/***********   *************/
@media (max-width: 414px){
  .container  {
    padding: 0.5em 0.5em 1em 0.5em;


  }
}

/*********** IPHONE 6 Landscape **********/
@media (max-width: 667px){

  .container  {
    padding: 0.5em 0.5em 1em 0.5em;


  }
}
/********** IPHONE PLUS Landscape **********/
@media (max-width: 736px){

  .container  {
    padding: 0.5em 0.5em 1em 0.5em;


  }
}
/******** TABLET IPAD LG ********/
@media (max-width: 768px){

  .container  {
    padding: 0.5em 0.5em 1em 0.5em;


  }
}
/******* IPAD Pro ********/
@media (max-width: 1024px){

  .container  {
    padding: 1.5em 2.5em 0em 2.5em;


  }
}

</style>
