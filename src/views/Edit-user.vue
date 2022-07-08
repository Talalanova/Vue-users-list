<template>
  <div class="edit-user">
    <Preloader v-if="!userDownloaded"></Preloader>
    <Error v-if="error" @click="error = !error"></Error>
    <Success v-if="success" :message="successMessage" @click="success = !success"></Success>
    <div class="edit-user__top-bar">
      <h1 class="main-h1">User`s profile</h1>
    </div>
    <form name="user">
      <fieldset :disabled="formDisabled">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder=""
          :value="user.name"
        />
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder=""
          :value="user.username"
        />
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder=""
          :value="user.email"
        />
        <label for="street">Street</label>
        <input
          type="text"
          id="street"
          name="street"
          placeholder=""
          :value="user.street"
        />
        <label for="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder=""
          :value="user.city"
        />
        <label for="code">Zip code</label>
        <input
          type="text"
          id="code"
          name="code"
          placeholder=""
          :value="user.zipcode"
        />
        <label for="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder=""
          :value="user.phone"
        />
        <label for="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          placeholder=""
          :value="user.website"
        />
        <label for="comment">Comment</label>
        <textarea 
          id="comment"></textarea>
      </fieldset>
      <button class="current-button" @click.prevent="formDisabled = false">
        Edit
      </button>
      <button
        :disabled="formDisabled"
        type="button"
        class="current-button"
        @click="saveChanges()"
      >
        Save
      </button>
    </form>
    <div>
      <Comments :comments="this.comments" :src="user.img"></Comments>
      <Pagination        
        :pages="this.pages"
        :totalPosts="paginationTotal"
        @loadPosts="loadPosts"      
      ></Pagination>
    </div>
  </div>
</template>

<script>
  import Preloader from "@/components/Preloader.vue";
  import Comments from "@/components/Comments.vue";
  import Error from "@/components/Error.vue";
  import Success from "@/components/Success.vue";
  import Pagination from "@/components/Pagination.vue";

  export default {
    components: {
      Comments,
      Error,
      Preloader,
      Pagination,
      Success
    },
    data() {
      return {
        user: {},
        formDisabled: true,
        comments: [],
        userDownloaded: false,
        error: false,
        success: false,
        paginationTotal: 0,
        pages: 0,
        successMessage : 'Form submitted successfully!',
      };
    },
    methods: {
      loadUser() {
        fetch(
          "https://jsonplaceholder.typicode.com/users?id=" +
            this.$route.params.id
        )
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok");
          })
          .then((json) => {
            this.userDownloaded = true;
            this.user = json.map((item) => {
              return {
                name: item.name,
                username: item.username,
                company: item.company.name,
                id: item.id,
                city: item.address.city,
                street: item.address.street,
                zipcode: item.address.zipcode,
                website: item.website,
                email: item.email,
                phone: item.phone,
                img: require(`@/assets/person(` +
                  (this.$route.params.id - 1) +
                  `).jpg`),
              };
            });
            this.user = this.user[0];
          })
          .catch(() => {
            this.error = true;
          });
      },
      saveChanges() {
        let formData = new FormData(document.forms.user);
        fetch("https://reqres.in/api/users", {
          method: "POST",
          body: formData,
        })
          .then((response) => {
            if (response.ok) {
              this.success = true;
            } else {
              this.error = true;
            }
          })
          .catch(() => {
            this.error = true;
          });
      },
      loadComments(page) {
        fetch("https://reqres.in/api/users?page=" + page)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok");
          })
          .then((json) => {
            console.log(json);
            this.paginationTotal = json.total;
            this.pages = json.total_pages;
            this.comments = json.data.map((item) => {
              return {
                id: item.id,
                name: item.first_name + " " + item.last_name,
                email: item.email,
                avatar: item.avatar,
                text: "Some comment text",
              };
            });
          })
          .catch(() => {
            this.error = true;
          });
      },
      loadPosts(page){
        this.loadComments(page)
      }
    },
    beforeMount() {
      this.loadUser();
      this.loadComments(1);
    },
  };
</script>

<style lang="sass">
.edit-user
  display: grid
  padding: 40px 0
  @media screen and (min-width: 1000px)
    grid-template-columns: 1fr 1fr
    column-gap: 3%
  .edit-user__top-bar
    display: flex
    justify-content: space-between
    align-items: center
    grid-column: 1 / -1
    button
      font-size: 19px
  form
    padding: 30px 0
    fieldset
      background: $basic-white
      border: 2px solid $border-form
      border-radius: 10px
      display: flex
      flex-direction: column
      padding: 20px
      box-sizing: border-box
      label
        font-size: $main-text
        text-align: left
        line-height: 19px
        font-weight: 400
        margin: 15px 0
      input,textarea
        border: 2px solid $border-form
        padding: 10px
        border-radius: 10px
      input
        @media screen and (min-width: 1000px)
          max-width: 50%
    button
      margin-top: 30px
      font-size: $main-text
      margin-right: 5%
      &:disabled
        background-color: $disabled-button
        color: $basic-white
        border-color: $disabled-button
</style>
