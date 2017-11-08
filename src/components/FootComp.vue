<template>
<transition name="lightSpeedIn">
  <div class="animated lightSpeedIn">

 <!-- ******FOOTER****** -->
    <footer class="footer">
        <div class="container text-center">
                <!--/* footer content here*/-->
               <small class="copyright"> <i class="fa fa-newspaper-o" aria-hidden="true"></i> <a href="https://www.billvas.com" data-toggle="tooltip" title="Visit my portfolio site at billvas.com"> &nbsp; Made by Bill Vasilopoulos 2017</a></small>



       </div><!--//container-->
  </footer><!--//footer-->





<!--<div class="row">-->
 <!--"Middle" type, four sub menu, animation introduced animate.css library, white mask, round custom switch button, default menu color configuration-->
  <!--<circle-menu type="middle" :number="4" animate="animated jello" mask="black" circle>
    <button type="button" slot="item_btn"></button>
    <a slot="item_1" class="fa fa-twitter fa-lg"></a>
    <a slot="item_2" class="fa fa-instagram fa-lg"></a>
    <a slot="item_3" class="fa fa-facebook fa-lg"></a>
    <a slot="item_4" class="fa fa-envelope fa-lg"></a>
  </circle-menu>-->
  </div>
</transition>
</template>
<script>
import CircleMenu from 'vue-circle-menu'
export default {
  components: {
    CircleMenu
  }
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
  color: #fff;
  margin-top: 5px;
  padding: 10px 0;
  border-top: 1px solid #f8b500;

  border-radius: .5em;
}
.footer .copyright {
  line-height: 1.6;
  color: #a1aab4;
  font-size: 14px;
}
.footer a {
  color: #a1aab4;
}
.footer a:hover{
  color:#fff;
}
.footer .fa-newspaper-o {
  color: #f8b500;
  position: relative;
  top:.2rem;
}
.fa {
  font-size:1.45em

}
</style>


