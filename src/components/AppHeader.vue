<template>
  <header class="header">
    <router-link to="/" class="logo">
      <img src="@/assets/logo.svg" alt="" width="50">
    </router-link>
    <router-link to="/" >
      Сотрудники
    </router-link>
    <router-link to="/companys" >
      Компании
    </router-link>
    <router-link to="/" >
      
    </router-link>
  </header>
</template>

<script>

export default {
  name: 'AppHeader',
  components: {
    
  }
}
</script>

<style lang="sass">

.header
  background-color: $main
  display: flex
  flex-direction: row
  padding: 0.8rem 5.5rem
  align-items: center
  justify-content: space-between
  border-radius: 0 0 30px 30px
  a
    display: block
    font-size: $main-text
    color: $basic-white
    padding: 0.2em 0
    position: relative
    @include link-clean
    &::after
        content: ''
        position: absolute
        bottom: 0
        left: 0
        width: 100%
        height: 0.1em
        background-color: hotpink
        opacity: 0
        transition: opacity 300ms, transform 300ms
    &:hover 
      &::after        
        opacity: 1
        transform: translate3d(0, 0.2em, 0)
</style>