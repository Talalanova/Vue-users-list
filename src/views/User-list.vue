<template>
  <section class="users">
    <div class="users__top-bar">
      <h1>Список пользователей</h1>
      <Sorting :arr="users"></Sorting>
    </div>    
    <Preloader v-if="!usersDownloaded"></Preloader>
    <ul class="users__list list-clean" v-for="user in users" :key="user.index">
      <li class="users__item card">
        <div class="card__text">
          <p>
            <span class="card__field">Ф.И.О:</span><span>{{ user.name }}</span>
          </p>
          <p>
            <span class="card__field">Город:</span><span>{{ user.city }}</span>
          </p>
          <p>
            <span class="card__field">Компания:</span><span>{{ user.company }}</span>
          </p>
        </div>
        <router-link class="card__link" to="/edit-user">Подробнее</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import Preloader from '@/components/Preloader.vue'
import Sorting from '@/components/Sorting.vue'

export default {
  name: 'Users',
  components: {
    Preloader,
    Sorting,
  },
  data() {
    return {
      users: [],
      usersDownloaded: false
    }
  },
  methods: {
    loadUsers() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
        })
        .then((json) => {
          console.log(json)
          this.users = json.map(item => {
            return {
              name : item.name,
              city: item.address.city,
              company: item.company.name
            }
          })
          this.usersDownloaded = true
        })
    }
  },
  mounted() {
    this.loadUsers();
  }
}
</script>

<style lang="sass">
.users__top-bar
  display: flex
  justify-content: space-between
.card
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: end
  background-color: $card-background
  border-radius: 10px
  padding: 20px 30px
  font-size: 18px
  line-height: 19px
  margin: 20px 0
  p
    color: #333
    .card__field
      color: $card-field
      margin-right: 10px
  .card__link
    color: $accent
    text-decoration: none
    &:hover
      color: $accent--hover
</style>
