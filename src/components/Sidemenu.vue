<template>
  <div class="sidemenu">
      <router-link to="/">Список пользователей</router-link>
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
    background-color: #BDBDBD
    display: flex
    flex-direction: column
    padding: 40px 25px
    align-items: center


</style>