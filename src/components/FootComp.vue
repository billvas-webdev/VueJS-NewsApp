<template>
  <!-- ******FOOTER****** -->
  <footer class="footer">
    <div class="container text-center">
      <!--/* footer content here*/-->
      <small class="copyright">
        <i class="fa fa-newspaper-o" aria-hidden="true"></i>
        <a
          href="https://www.billvas.com"
          data-toggle="tooltip"
          title="Visit my portfolio site at billvas.com"
        >Created by Bill Vasilopoulos</a>
      </small>
    </div>
    <!--//container-->
  </footer>
  <!--//footer-->
</template>
<script>
export default {
  name: "FootComp"
};
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
  color: lightgoldenrodyellow;
  margin-top: -0.55rem;
  padding: 0.65em 0;
  border-top: 0.5px solid lightgoldenrodyellow;

  border-radius: 0.5em;
}
.footer .copyright {
  line-height: 2em;
  color: #a1aab4;
  font-size: 14px;
}
.footer a {
  color: lightgoldenrodyellow;
}
.footer a:hover {
  color: orangered;
}
.footer .fa-newspaper-o {
  color: lightgoldenrodyellow;
  position: relative;
  top: 0.2rem;
}
.fa {
  font-size: 1.45em;
}

@media only screen and (max-width: 360px) and (min-width: 320px) {
  .footer .fa-newspaper-o {
    position: relative;
  }
}
</style>
