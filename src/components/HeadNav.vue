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
      <a class="navbar-brand" href="#">Daily News and Weather</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">About<span class="sr-only">(current)</span></a></li>
        <li><a href="#">Contact</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Social Media<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="https://www.facebook.com/facebook" target="_blank"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i>&nbsp; &nbsp; &nbsp; &nbsp;Facebook</a></li>
            <li><a href="https://twitter.com/?lang=en" target="_blank"><i class="fa fa-twitter fa-lg" aria-hidden="true"></i>&nbsp; &nbsp; Twitter</a></li>
            <li><a href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram fa-lg" aria-hidden="true"></i>&nbsp; &nbsp; Instagram</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">

        <li><a href="@/components/Login">Login</a></li>

        <li class="dropdown">


          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Login<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <div class="wrapper">
    <form class="form-signin">
      <h2 class="form-signin-heading">Please login</h2>
      <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
      <input type="password" class="form-control" name="password" placeholder="Password" required=""/>
      <label class="checkbox">
        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Remember me
      </label>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
    </form>
  </div>

          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>
<script>
</script>

<style scoped>
.navbar{
  font-family: 'Lato', arial, sans-serif;
  margin-bottom: .75em;
  border-top: 1px solid #f8b500;
  border-radius: .5em;
}
  h2{
    text-align: center;
    font-weight:bold;
    margin-bottom: 10px;
}



body {
	background: #eee !important;
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

a{

}
.form {
  border-radius: em;
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
		  z-index: 2;
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



