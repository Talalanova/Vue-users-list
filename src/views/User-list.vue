<template>
  <div>
    <Map ref="map" :array="addresses" :content="user"></Map>
    <section class="users">
      <div class="users__top-bar">
        <h1>Список пользователей</h1>
        <Sorting :arr="users" :city="'city'" :company="'company'"></Sorting>
      </div>    
      <Preloader v-if="!usersDownloaded"></Preloader>
      <Error v-if="error"></Error>
      <ul class="users__list" >
        <li v-for="user in users" :key="user.index" class="users__item card">
          <div class="card__text">
            <p>
              <span class="card__field">Ф.И.О:</span><span>{{ user.name }}</span>
            </p>
            <p>
              <span class="card__field">Город:</span><span>{{ user.address.city }}</span>
            </p>
            <p>
              <span class="card__field">Компания:</span><span>{{ user.company }}</span>
            </p>
          </div>
          <router-link class="card__link" :to="'/edit-user/' + user.id">Подробнее</router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Preloader from '@/components/Preloader.vue'
import Sorting from '@/components/Sorting.vue'
import Error from '@/components/Error.vue'
import Map from '@/components/Map.vue'

export default {
  name: 'Users',
  components: {
    Preloader,
    Sorting,
    Error,
    Map
  },
  data() {
    return {
      users: [],
      usersDownloaded: false,
      error: false,
      addresses: [],
      user: 'fhdgh'
    }
  },
  methods: {
    loadUsers() {
      fetch('https://jsonplaceholder.typicode.com/users?offset=0&limit=10')
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          throw new Error('Network response was not ok');
        })
        .then((json) => {          
          this.users = json.map(item => {
            return {
              name : item.name,              
              company: item.company.name,
              id: item.id,
              address: item.address
            }
          })
          this.usersDownloaded = true
          this.addresses = this.users.map(item => {
            return {
              lat: item.address.geo.lat,
              lng: item.address.geo.lng
            }
          })
          this.$refs.map.renderMarkers(this.addresses);
        })
        .catch(() => {
          this.error = true
        });
    },
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
  align-items: center
.users__list
  @include list-clean
.card
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: end
  background-color: $basic-white
  border-radius: 10px
  padding: 20px 30px
  font-size: $main-text
  line-height: 19px
  margin: 20px 0
  -webkit-box-shadow: -1px 0px 16px -2px rgba(34, 60, 80, 0.2)
  -moz-box-shadow: -1px 0px 16px -2px rgba(34, 60, 80, 0.2)
  box-shadow: -1px 0px 16px -2px rgba(34, 60, 80, 0.2)
  p
    color: #333
    .card__field
      color: $card-field
      margin-right: 10px
  .card__link
    color: $text
    text-decoration: none
    &:hover
      color: $main
</style>
