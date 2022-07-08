<template>
  <header class="header">
    <router-link to="/">
      <span class="logo">
        <img src="@/assets/logo.svg" alt="" width="50">
      </span>
    </router-link>
    <router-link to="/analytics" class="header__link">
      Analytics
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
  justify-content: start
  gap: 30px
  border-radius: 0 0 30px 30px
  a
    display: block
    font-size: $main-text
    color: $basic-white
    padding: 0.2em 0
    position: relative
    @include link-clean
  .header__link
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