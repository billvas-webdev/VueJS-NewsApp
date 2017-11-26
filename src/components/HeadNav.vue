<template>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <router-link class="navbar-brand" to="/"><i class="fa fa-home" aria-hidden="true"></i> Daily News and Weather</router-link>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><router-link to="/about">About<span class="sr-only">(current)</span></router-link></li>


        <li><router-link to="/contact">Contact<span class="sr-only">(current)</span></router-link></li>
        <!--<li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Social Media<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="https://www.facebook.com/facebook" target="_blank"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i>&nbsp; &nbsp; &nbsp; &nbsp;Facebook</a></li>
            <li><a href="https://twitter.com/?lang=en" target="_blank"><i class="fa fa-twitter fa-lg" aria-hidden="true"></i>&nbsp; &nbsp; Twitter</a></li>
            <li><a href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram fa-lg" aria-hidden="true"></i>&nbsp; &nbsp; Instagram</a></li>
            <!--<li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>-->
        </li>
      </ul>
     <!-- <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>-->
      <ul class="nav navbar-nav navbar-right">

        <!--<li><a href="@/components/Login">Login</a></li>-->
 <!--<li><router-link to="/"><i class="fa fa-home" aria-hidden="true"></i><span class="sr-only">(current)</span></router-link></li>-->






          </ul>
        </li>
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

  h2{
    text-align: center;
    font-weight:bold;
    margin-bottom: 10px;
}
.wrapper {
 	margin-top: 0;
  margin-bottom: 0;
}
.dropdown-menu {
  opacity: .95;
   filter: alpha(opacity=90);
  background-color: #fff;
  border-radius: 1em;
  text-align: left;
}

.fa-facebook, .fa-twitter{
  color: #299cff;
}

.fa-instagram{
  color: red;
}

.form {
  border-radius: .25em;
}

.form-signin {
  width: 250px;
  height: auto;
  padding: 15px 5px 25px;
  margin: 0 auto;
  background-color: #fff;
  border: 0px solid black;
  border-radius: .5em;

/*.form-signin-heading .checkbox {
	  margin-bottom: 30px;
	}*/
}

	.checkbox {
    text-align: center;
	  font-weight: bold;
	}

	.form-control {
	  position: relative;
	  font-size: 16px;
	  height: auto;
	  padding: 10px;
		/*@include box-sizing(border-box);*/
  }

		.formcontrol:focus {
		  z-index: 1;
		}


	input[type="text"] {
	  margin-bottom: -1px;
	  border-bottom-left-radius: 0;
	  border-bottom-right-radius: 0;
	}

	input[type="password"] {
	  margin-bottom: 20px;
	  border-top-left-radius: 0;
	  border-top-right-radius: 0;
	}

</style>



