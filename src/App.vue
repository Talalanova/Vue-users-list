<template>
  <div class="wrapper">
    <AppHeader></AppHeader>
    <main class="main">
      <router-view/>
    </main>
  </div>  
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: "",
  components: {
    AppHeader,
  },
  props: {
    
  }
}
</script>

<style lang="sass">

html
  height: 100%
  background-color: $main-background

#app 
  height: 100%

body 
  margin: 0 auto
  min-width: 320px
  max-width: 1660px
  height: 100%
  font-family: "Roboto", "Arial", sans-serif

.wrapper 
  width: 100%
  height: 100%

.main
  padding: 4rem
</style>
