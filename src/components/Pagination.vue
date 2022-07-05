<template>
  <ul class="pagination">
    <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
      <button type="button" @click="loadPosts(pageNumber)" >
        {{ pageNumber }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      currentPage: 1,
    };
  },
  props: {
    pages: Number
  },
  emits: ["loadPosts"],
  methods: {
    loadPosts(n) {
      this.$emit("loadPosts", n);
    },
  },
  mounted() {

  },
};
</script>

<style lang="sass">

.pagination
  @include list-clean
  display: flex
  flex-direction: row
  justify-content: center
  button
    border: none
    color: $text
    background: none
    margin: 0 5px
    cursor: pointer
    font-size: $main-text
    &:hover
        color: $main
</style>

