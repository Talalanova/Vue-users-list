<template>
  <div class="edit-user">
    <div class="edit-user__top-bar">
      <h1>Профиль пользователя</h1>
      <button class="current-button">Редактировать</button>
    </div>    
    <form>
      <fieldset>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="" />
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="" />
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="" />
        <label for="street">Street</label>
        <input type="text" id="street" name="street" placeholder="" />
        <label for="city">City</label>
        <input type="text" id="city" name="city" placeholder="" />
        <label for="code">Zip code</label>
        <input type="number" id="code" name="code" placeholder="" />
        <label for="phone">Phone</label>
        <input type="tel" id="phone" name="phone" placeholder="" />
        <label for="website">Website</label>
        <input type="text" id="website" name="website" placeholder="" />
        <label for="comment">Comment</label>
        <textarea id="comment"></textarea>
      </fieldset>
      <button disabled type="submit" class="current-button ">Отправить</button>
    </form>
  </div>
</template>

<script>
export default {
  
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