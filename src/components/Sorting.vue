<template>
    <div class="sorting">
        <p>Сортировка</p>
        <button @click="sort(arr,city)" class="current-button">По городу</button>
        <button @click="sort(arr,company)" class="current-button">По компании</button>
    </div>
</template>

<script>
export default {
    name: 'Sorting',
    props: {
        arr: Array,
        city: String,
        company: String
    },
    methods: {
        sort(array,parameter) {
            array.sort((a,b) => (a[parameter] > b[parameter]) ? 1 : -1)
        }
    }
}
</script>

<style lang="sass">
.sorting
    display: grid
    grid-template-columns: 1fr 1fr
    text-align: center
    column-gap: 5px
    p
        grid-column: 1 / -1
        position: relative
        padding-left: 25px
        margin-bottom: 12px
        &::before
            position: absolute
            width: 25px
            height: 20px
            content: ""
            background-image: url('~@/assets/sorting.svg')
            background-repeat: no-repeat
            left: 45px
</style>