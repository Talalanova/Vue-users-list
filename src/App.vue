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
  height: 100%
  font-family: "Roboto", "Arial", sans-serif

.wrapper 
  margin: 0 auto
  min-width: 320px
  max-width: 1440px

.main
  padding: 0 1rem
  @media screen and (min-width: 1000px)
    padding: 0 4rem
</style>
