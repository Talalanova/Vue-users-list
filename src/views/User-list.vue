<template>
  <section class="users">
    <h1>Список пользователей</h1>
    <ul class="users__list">
      <li class="users__item card">
        <div class="card__text">
          <p>
            <span class="card__field">Ф.И.О:</span><span>####</span>
          </p>
          <p>
            <span class="card__field">Город:</span><span>####</span>
          </p>
          <p>
            <span class="card__field">Компания:</span><span>####</span>
          </p>
        </div>
        <router-link to="/edit-user">Подробнее</router-link>
      </li>
    </ul>
  </section>
</template>

<script>

export default {
  name: 'Users',
  components: {
    
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="sass">

</style>
