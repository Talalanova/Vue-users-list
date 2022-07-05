<template>
  <div class="success">
    <div class="overlay">
      <img src="@/assets/success.svg" width="100" height="100" />
      <p>
        {{ message }}
      </p>
      <span>Click to close <img src="@/assets/pointer-cursor.svg" width="25" height="25" /></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Error",
    props: {
      message: String,
    },
  };
</script>

<style lang="sass">

.success
    p
        color: $basic-white
        text-align: center
        font-size: 2.2rem
    img
        margin: 15% auto 0
        display: block
    span
        color: $basic-white
        text-align: center
        font-size: 1.2rem
        display: block
        img
            margin: 0
            display: inline-block

</style>
