<template>
  <transition name="fadeInDownBig">
    <div class="animated fadeInDownBig">
      <div class="container" id="app">

        <HeadNav></HeadNav>
        <router-view/>

      </div>
    </div>
  </transition>
</template>
<script>

import HeadNav from '@/components/HeadNav'




export default {
  name: 'app',
  components: {
    HeadNav:HeadNav






  }
}
</script>
<style>

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  body {

    font-family: 'Lato', arial, sans-serif;
    /*background-color: #263140;*/
    background-color: #082542;
    /*background: #000000;  /* fallback for old browsers */
    /*background: -webkit-linear-gradient(to top, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
    /*background: linear-gradient(to top, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



    background-size: cover;


  }
  #app {
    padding: 1px 0 1px 0;
  }
  .jumbotron{
    margin-bottom: 3px;
  }


  @media (max-width: 1200px){

  .container {

    width: 90em;
    padding-left: 5px;
    padding-right: 5px;
  }
}
@media (max-width: 1024px){
.container {
    width: auto;
  }
}


@media (max-width: 992px){

  .container {
    width: auto;
  }
}
@media (max-width: 768px){

  .container {
    width: auto;
    zoom: 60%;
  }



  .media-object {
    zoom: 100%;
    height: 23rem;
  }
  a {
    font-size: 2.5rem;
  }

}

@media (max-width: 375px){

  .media-object {

    width: auto;

  }
  a{
    font-size: 1em;
  }
  i{
    font-size: 1em;
  }
   p{

    font-size: 30em;
  }



  .container {
    width: auto;
    zoom: 30%;
  }

}
</style>
