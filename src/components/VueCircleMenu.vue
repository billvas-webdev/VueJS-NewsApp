<template>
<div class="row">
 <!--"Middle" type, four sub menu, animation introduced animate.css library, white mask, round custom switch button, default menu color configuration-->
  <circle-menu type="middle" :number="4" animate="animated jello" mask="black" circle>
    <button type="button" slot="item_btn"></button>
    <a slot="item_1" class="fa fa-twitter fa-lg"></a>
    <a slot="item_2" class="fa fa-instagram fa-lg"></a>
    <a slot="item_3" class="fa fa-facebook fa-lg"></a>
    <a slot="item_4" class="fa fa-envelope fa-lg"></a>
  </circle-menu>
  </div>

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
.row{
  width: 50px;
  text-align: center;
  margin: 0 auto;
}

</style>


