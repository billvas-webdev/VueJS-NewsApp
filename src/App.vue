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

     -webkit-animation: colorchange 7s; /* Chrome and Safari */
    }
    @keyframes colorchange
    {
      0%   {background: #299cff;}
      50%  {background: #082542;}

      100%  {background: #082542;}

    }

    @-webkit-keyframes colorchange /* Safari and Chrome - necessary duplicate */
    {
      0%   {background: #299cff;}
      50%  {background: #082542;}

      100%  {background: #082542;}

    }






  #app {
    padding: 1px 0 1px 0;
  }
  .jumbotron{
    margin-bottom: 3px;
  }



</style>
