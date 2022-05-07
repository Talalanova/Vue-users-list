<template>
  <div class="wrapper">
    <Sidemenu></Sidemenu>
    <main class="main">
      <router-view/>
    </main>
  </div>  
</template>

<script>
import Sidemenu from '@/components/Sidemenu.vue'
export default {
  name: "",
  components: {
    Sidemenu,
  },
  props: {
    
  }
}
</script>

<style lang="sass">

html, #app 
  height: 100%

body 
  margin: 0 auto
  min-width: 320px
  max-width: 1920px
  height: 100%

.wrapper 
  display: grid
  grid-template-columns: 20% auto
  width: 100%
  height: 100%

</style>
