<template>

 <!-- ******FOOTER****** -->
    <footer class="footer">
        <div class="container text-center">
                <!--/* footer content here*/-->
               <small class="copyright"> <i class="fa fa-newspaper-o" aria-hidden="true"></i> <a href="https://www.billvas.com" data-toggle="tooltip" title="Visit my portfolio site at billvas.com"> &nbsp; Made by Bill Vasilopoulos 2017</a></small>



       </div><!--//container-->
  </footer><!--//footer-->

</template>
<script>
  export default {
    name: 'FootComp'
}
</script>
<style scoped>
/*.row{
  width: 50px;
  text-align: center;
  margin: 0 auto;
}*/
/* ======= Footer =======*/
.footer {
  background: #204d8a;
  color: #f8b500;
  margin-top: -.35em;
  padding: .65em 0;
  border-top: 1px solid #f8b500;

  border-radius: .5em;
}
.footer .copyright {
  line-height: 2em;
  color: #a1aab4;
  font-size: 14px;
}
.footer a {
  color: #f8b500;
}
.footer a:hover{
  color:orangered;
}
.footer .fa-newspaper-o {
  color: orangered;
  position: relative;
  top:.2rem;
}
.fa {
  font-size:1.45em

}

</style>


