<template>
  <div>
    <Map ref="map"></Map>
    <section class="users">
      <div class="users__top-bar">
        <h1 class="main-h1">Employee profiles</h1>
        <Sorting :arr="users" :city="'city'" :company="'company'"></Sorting>
      </div>
      <Preloader v-if="!usersDownloaded"></Preloader>
      <Error v-if="error"></Error>
      <ul class="users__list">
        <li v-for="user in users" :key="user.index" class="user-card">
          <div class="img-wrapper" :data-src="user.img" @click="openFullPic">
            <img
              width="120"
              :src="user.img"
              alt=""
            />
          </div>
          <div class="user-card__text">
            <p>
              <span class="user-card__field">Full name:</span
              ><span>{{ user.name }}</span>
            </p>
            <p>
              <span class="user-card__field">City:</span><span>{{ user.city }}</span>
            </p>
            <p>
              <span class="user-card__field">Company:</span
              ><span>{{ user.company }}</span>
            </p>
          </div>
          <router-link class="user-card__link" :to="'/edit-user/' + user.id"
            >Detail</router-link
          >
        </li>
      </ul>
      <div v-if="zoom" class="zoom">
        <div class="overlay" @click.self="zoom = !zoom">
          <div class="zoom__container">
            <a class="zoom__button" @click.prevent="zoom = !zoom" role="button" aria-label="Close full photo" href="">
              <span aria-hidden="true"></span>
            </a>          
            <img class="zoom__img" width="450" :src="full_pic" alt="" />
          </div>
        </div>
      </div>
      <template ref="popup">
        <div class="popup__content">
          <img class="popup__img" width="200" :src="this.user.img" alt="" />
          <p>
            Hi there!<br />I am <span class="popup__name"><br /></span>
          </p>
          <p>Contact me: <a href="" class="popup__email"></a></p>
        </div>
      </template>
    </section>
  </div>
</template>

<script>
  import Preloader from "@/components/Preloader.vue";
  import Sorting from "@/components/Sorting.vue";
  import Error from "@/components/Error.vue";
  import Map from "@/components/Map.vue";

  export default {
    name: "Users",
    components: {
      Preloader,
      Sorting,
      Error,
      Map,
    },
    data() {
      return {
        users: [],
        usersDownloaded: false,
        error: false,
        user: "",
        zoom: false,
        full_pic: "",
      };
    },
    methods: {
      getTemplate(item) {
        const templateFragment = this.$refs.popup;
        const template = templateFragment.querySelector(".popup__content");

        const popup = template.cloneNode(true);
        const name = popup.querySelector(".popup__name");
        name.textContent = item.name;
        const email = popup.querySelector(".popup__email");
        email.textContent = item.email;
        email.href = "mailto:" + item.email;
        const img = popup.querySelector(".popup__img");
        img.src = item.img;
        return popup;
      },
      loadUsers() {
        fetch("https://jsonplaceholder.typicode.com/users?offset=0&limit=10")
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok");
          })
          .then((json) => {
            console.log(json);
            this.users = json.map((item, index) => {
              return {
                name: item.name,
                company: item.company.name,
                id: item.id,
                city: item.address.city,
                website: item.website,
                email: item.email,
                lat: item.address.geo.lat,
                lng: item.address.geo.lng,
                img: require(`@/assets/person(` + index + `).jpg`),
              };
            });
            this.usersDownloaded = true;
            this.$refs.map.renderMarkers(this.users, this.getTemplate);
          })
          .catch(() => {
            this.error = true;
          });
      },
      openFullPic() {
        this.zoom = true;       
        this.full_pic = event.currentTarget.getAttribute('data-src');        
      },
    },
    mounted() {
      this.loadUsers();
    },
  };
</script>

<style lang="sass">
.users
  max-width: 1150px
  margin: 0 auto
  .users__top-bar
    display: flex
    justify-content: space-between
    align-items: start
    flex-direction: column
    margin: 20px 0
    @media screen and (min-width: 1000px)
      flex-direction: row
      align-items: center
  .users__list
    @include list-clean
    @media screen and (min-width: 1000px)
      display: grid
      grid-template-columns: 1fr 1fr
      column-gap: 5%
.user-card
  display: grid  
  column-gap: 5%
  align-items: flex-start
  background-color: $basic-white
  border-radius: 10px
  padding: 20px 20px 10px 
  font-size: $main-text--mobile
  line-height: 19px
  margin: 20px 0
  -webkit-box-shadow: -1px 0px 16px -2px rgba(34, 60, 80, 0.2)
  -moz-box-shadow: -1px 0px 16px -2px rgba(34, 60, 80, 0.2)
  box-shadow: -1px 0px 16px -2px rgba(34, 60, 80, 0.2)
  @media screen and (min-width: 430px)
    grid-template-columns: 120px auto
  @media screen and (min-width: 1000px)
    grid-template-columns: 150px auto
    padding: 30px 30px 20px
    font-size: $main-text
  img
    margin: 0 0 20px
    @media screen and (min-width: 1000px)
      width: 150px
      margin: 0
  p
    color: #333
    margin: 0 0 1rem 0
    .user-card__field
      color: $card-field
      margin-right: 10px
  .img-wrapper
    position: relative
    cursor: pointer
    &:hover
      &::after
        content: ""
        position: absolute
        width: 100%
        height: 30%
        background-color: $basic-black
        background-image: url(~@/assets/zoom.svg)
        background-repeat: no-repeat
        background-size: 30px 30px
        background-position: center
        opacity: 0.5
        bottom: 0
        left: 0
        right: 0
  .user-card__link
    color: $text
    text-decoration: none
    grid-column: 1 / -1
    text-align: right
    &:hover
      color: $main

.popup__content
  max-width: 220px
  p
    font-size: $popup-text
    font-weight: 400
    word-break: break-all
  img
    display: block
    margin: 0 auto

.zoom
  .zoom__container
    margin: 10% auto
    display: block
    position: relative
    max-width: fit-content
    .zoom__img
      margin: 0 auto
      display: block
      -webkit-box-shadow: 0px 0px 0px 17px rgba(255, 255, 255, 0.2)
      -moz-box-shadow: 0px 0px 0px 17px rgba(255, 255, 255, 0.2)
      box-shadow: 0px 0px 0px 17px rgba(255, 255, 255, 0.2)
    .zoom__button
      position: absolute
      top: -45px
      right: -30px
      span
        position: relative
        &::after
          position: absolute
          content: ""
          width: 5px
          height: 25px
          transform: rotate(45deg)
          background-color: $card-background
        &::before
          position: absolute
          content: ""
          width: 5px
          height: 25px
          transform: rotate(-45deg)
          background-color: $card-background
        &:hover
          &::after,
          &::before         
            background-color: $main
</style>
