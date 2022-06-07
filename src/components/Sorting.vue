<template>
    <div class="sorting">        
        <button @click="sort(arr,city)" class="current-button">By city</button>
        <button @click="sort(arr,company)" class="current-button">By organization</button>
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
    position: relative
    padding: 0 0 0 30px
    margin-left: auto
    &::before
        position: absolute
        width: 20px
        height: 20px
        content: ""
        background-image: url('~@/assets/sort_icon.svg')
        background-repeat: no-repeat
        left: 0
        top: 5px
        background-size: contain
</style>