<template>
  <div class="error">
    <div class="overlay" >
      <img src="@/assets/error.svg" width="100" height="100" />
      <p>
        Something went wrong,<br> try reloading the page
      </p>
      <span>Click to close</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
}
</script>

<style lang="sass">

.error
  p
    font-size: 2.2rem
    color: $basic-white
    text-align: center
  span
    color: $basic-white
    text-align: center
    font-size: 1.2rem
    display: block
    background-image: url('~@/assets/pointer-cursor.svg')
    background-repeat: no-repeat
    background-size: 25px
    background-position: right
  img
    margin: 15% auto 0
    display: block
</style>