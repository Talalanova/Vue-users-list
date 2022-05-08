<template>
  <div class="sidemenu">
    <router-link to="/" class="logo">
      <img  src="@/assets/logo.svg" alt="Earth Grid Symbol And Three Persons">
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Sidemenu',
  components: {
    
  }
}
</script>

<style lang="sass">

.sidemenu
  background-color: $sidemenu
  display: flex
  flex-direction: column
  padding: 40px 25px
  align-items: center

.logo
  display: block
  width: 100%
  img
    display: block
    max-width: 120px
    width: 100%
    margin: auto
    &:hover
      opacity: 0.7
</style>