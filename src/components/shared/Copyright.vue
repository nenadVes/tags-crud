<template>
  <div class="background">
    <img class="logo" src="@/assets/autoklose-logo@1x.png" alt="">
    <div> © 2019. Autoklose</div>
  </div>
</template>

<script>
export default {
  name: 'Copyright'
}
</script>

<style scoped>
    .background {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 400px;
        background: url('../../assets/img-background-footer-transparent.png') no-repeat center bottom;
    }

    .background .logo {
        margin-top: 320px;
    }

    .background div {
        color: #6A777B;
        font-family: Roboto;
        font-size: 12px;
        font-weight: 400;
        line-height: 22px;
        text-align: center;
    }
</style>
