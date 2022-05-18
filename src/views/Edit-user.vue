<template>
  <div class="edit-user">
    <div class="edit-user__top-bar">
      <h1>Профиль пользователя</h1>
      <button class="current-button" @click="formDisabled = false">Редактировать</button>
    </div>    
    <form>
      <fieldset :disabled="formDisabled">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="" :value="user.name"/>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="" :value="user.username"/>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="" :value="user.email"/>
        <label for="street">Street</label>
        <input type="text" id="street" name="street" placeholder="" :value="user.address.street"/>
        <label for="city">City</label>
        <input type="text" id="city" name="city" placeholder="" :value="user.address.city" />
        <label for="code">Zip code</label>
        <input type="text" id="code" name="code" placeholder="" :value="user.address.zipcode"/>
        <label for="phone">Phone</label>
        <input type="tel" id="phone" name="phone" placeholder="" :value="user.phone"/>
        <label for="website">Website</label>
        <input type="text" id="website" name="website" placeholder="" :value="user.website"/>
        <label for="comment">Comment</label>
        <textarea id="comment"></textarea>
      </fieldset>
      <button :disabled="formDisabled" type="button" class="current-button ">Отправить</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      formDisabled: true,
    }
  },
  methods: {
    loadUser() {
      fetch('https://jsonplaceholder.typicode.com/users?id=' + this.$route.params.id)
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          throw new Error('Network response was not ok');
        })
        .then((json) => {
          this.user = json[0]
          console.log(this.user)
        })
        .catch(() => {
          this.error = true
        });
    }
  },
  beforeMount() {
    this.loadUser();
  }
}
</script>

<style lang="sass">
.edit-user
  .edit-user__top-bar
    display: flex
    justify-content: space-between
    button
      font-size: 19px
  form
    padding: 30px 0
    fieldset
      border: 2px solid $border-form
      border-radius: 10px
      display: flex
      flex-direction: column
      padding: 20px
      label
        font-size: 18px
        text-align: left
        line-height: 19px
        font-weight: 400
        margin: 15px 0
      input,textarea
        border: 2px solid $border-form
        padding: 10px 
        border-radius: 10px
      input
        max-width: 50%
    button
      margin-top: 30px
      font-size: 18px
      &:disabled
        background-color: $disabled-button
        color: $basic-white
        border-color: $disabled-button
</style>