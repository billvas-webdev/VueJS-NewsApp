<template>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar top-bar"></span>
        <span class="icon-bar middle-bar"></span>
        <span class="icon-bar bottom-bar"></span>
      </button>
      <router-link class="navbar-brand" to="/"><i class="fa fa-home" aria-hidden="true"></i> Daily News and Weather</router-link>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><router-link to="/about">About<span class="sr-only">(current)</span></router-link></li>
        <li><router-link to="/contact">Contact<span class="sr-only">(current)</span></router-link></li>
      </ul>
      </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
    export default {
      name: 'HeadNav'
}

</script>

<style scoped>
h2{
    text-align: center;
    font-weight:bold;
    margin-bottom: 10px;
}
.navbar-nav>li>a{
    color:#9cd1ff;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
}
.navbar-nav>li>a:hover {

    color: #f8b500;
}
.navbar-nav>li>a:focus {
    text-decoration: none;
}
.navbar-brand {
    color: #9cd1ff;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
}
.navbar-brand:hover {
    color: #f8b500;
}
.navbar{
    font-size: 1.25em;
    font-family: 'Lato', arial, sans-serif;
    margin-bottom: 4px;
    border-top: .5px solid lightgoldenrodyellow;
    border-radius: .5em;
}
.navbar-toggle{
  padding: 11px ;

}
.navbar-toggle .icon-bar {
  width: 22px;
  transition: all 0.2s;
}
.navbar-toggle .top-bar {
  -webkit-transform: translateX(3px) rotate(45deg);
  -webkit-transform-origin: 10% 10%;
  transform: translateX(3px) rotate(45deg);
  transform-origin: 10% 10%;
  -ms-transform: translateX(3px) rotate(45deg);
  -ms-transform-origin: 10% 10%;
}
.navbar-toggle .middle-bar {
opacity: 0;
}
.navbar-toggle .bottom-bar {
  -webkit-transform:  translateX(3px) rotate(-45deg);
  -webkit-transform-origin: 10% 90%;
  transform:  translateX(3px) rotate(-45deg);
  transform-origin: 10% 90%;
  -ms-transform:  translateX(3px) rotate(-45deg);
  -ms-transform-origin: 10% 90%;
}
.navbar-toggle.collapsed .top-bar {
  -webkit-transform: rotate(0);
  transform: rotate(0);
  -ms-transform: rotate(0);
}
.navbar-toggle.collapsed .middle-bar {
  opacity: 1;
}
.navbar-toggle.collapsed .bottom-bar {
  -webkit-transform: rotate(0);
  transform: rotate(0);
  -ms-transform:  rotate(0);
}


</style>



