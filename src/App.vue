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

html
  height: 100%

#app 
  height: 100%

body 
  margin: 0 auto
  min-width: 320px
  max-width: 1660px
  height: 100%
  font-family: "Tahoma", "Arial", sans-serif

.wrapper 
  display: grid
  grid-template-columns: 20% auto
  width: 100%
  height: 100%

.main
  padding: 60px 40px
</style>
