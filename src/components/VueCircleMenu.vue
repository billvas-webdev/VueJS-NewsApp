<template>

 <!-- ******FOOTER****** -->
    <footer class="footer">
        <div class="container text-center">
                <!--/* footer content here*/-->
               <small class="copyright">Designed with <i class="fa fa-heart"></i> by Bill Vasilopoulos<a href="_blank"></a> </small>



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
  </circle-menu>
  </div>-->

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
  margin-top: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #f8b500;
  border-radius: .5em;
}
.footer .copyright {
  line-height: 1.6;
  color: #a1aab4;
  font-size: 14px;
}
.footer a {
  color: #fff;
}
.footer .fa-heart {
  color: #fb866a;
}

</style>


