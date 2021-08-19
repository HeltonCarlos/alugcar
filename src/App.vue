<template>
  <router-view/>
</template>

<script>

export default {  
  data() {
    return{}
  },
}
</script>

<style>
*{padding: 0px;margin:0px;box-sizing: border-box;font-family: 'Oswald', sans-serif;}
.flex{display: flex;}
.flex-alinhar{display: flex;align-items: center;}
.flex-coluna{display: flex;flex-direction: column;}
.container-flex{max-width: 70%;display: flex;margin:0 auto; justify-content: space-between;}
.flex-wrap{display:flex;flex-wrap: wrap;}
a{text-decoration: none;}
li{list-style: none;}
</style>

