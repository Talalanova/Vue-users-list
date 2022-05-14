<template>
    <div class="error">
      <div class="overlay" >
        <img src="@/assets/error.svg" width="100" height="100" />
        <h1>
          Что-то пошло не так.<br> Не удалось соединиться с сервером, попробуйте перезагрузить страницу.
        </h1>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Error',
    props: {
        
    }
}
</script>

<style lang="sass">

.error
    h1
        color: $basic-white
        text-align: center
    img
        margin: 15% auto 0
        display: block   
</style>