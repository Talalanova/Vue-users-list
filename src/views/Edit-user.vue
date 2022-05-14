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
      <button type="submit" class="current-button">Отправить</button>
    </form>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="sass">
.edit-user
  form
    display: flex
    flex-direction: column
</style>