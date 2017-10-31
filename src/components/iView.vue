<template>
  <div class="layout">
        <div class="layout-ceiling">
            <div class="layout-ceiling-main">
                <a href="#">Contact Us</a> |
                <a href="#">Sign Up</a> |
                <a href="#">About</a> |
                <a href="#">Help</a>
            </div>
        </div>
        <div class="layout-header">
            <div class="layout-logo"> Daily News and Weather</div>
        </div>

    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 10px;
        overflow: hidden;
    }
    .layout-logo{
      padding-top: .25em;
      font-size:1em;
      text-align: center;
        color: white;
        width: 10em;
        height: 40px;
        background: #263140;
        border-radius: 5px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-ceiling{
        background: #263140;
        padding: 10px 0;
        overflow: hidden;
    }
    .layout-ceiling-main{
        float: right;
        margin-right: 15px;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
</style>
