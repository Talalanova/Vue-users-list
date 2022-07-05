<template>
    <div class="reviews">
        <div class="img-wrapper">
            <img :src="src" width="150"/>
        </div>
        <div class="reviews__comment comment">
            <ul class="comment__list">
                <li class="comment__item" v-for="comment in comments" :key="comment.id">                    
                    <span class="comment__field comment__field--name">{{ comment.name }}</span>
                    <a :href="`mailto:` +  comment.email " class="comment__field comment__field--email">{{ comment.email }}</a>
                    <div>{{ comment.text }}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Comments',
    props: {
        comments : Array,
        src: String,
    },
    data(){
        return {

        }
    },
}
</script>

<style lang="sass">
.reviews
    padding: 30px 0 0
    img
        border-radius: 50%
        border: 2px solid $basic-white
        background-color: $basic-white
        @media screen and (min-width: 1000px)
            width: 300px
    .img-wrapper
        position: relative
        max-width: fit-content        
        &::before
            position: absolute
            content: ""
            width: 110px
            height: 110px
            background-color: $main
            border-radius: 50%
            bottom: 10px
            right: -35px
            z-index: -1
            border: 2px solid $basic-white
            @media screen and (min-width: 1000px)
                width: 220px
                height: 220px
        &::after            
            position: absolute
            content: ""
            width: 20px
            height: 20px
            background-color: $decoration
            border-radius: 50%
            bottom: 80%
            right: -60px
            z-index: -1
            border: 2px solid $basic-white
            @media screen and (min-width: 1000px)
                width: 40px
                height: 40px
.reviews__comment
    .comment__list
        @include list-clean
        .comment__item
            margin: 10px 0
            background: $basic-white
            border-radius: 10px
            padding: 20px
            border: 2px solid $border-form
            .comment__field
                display: block                
                font-weight: 500
                color: $text
                font-size: $main-text
                
            .comment__field--email
                color: $main
                font-size: $popup-text
                margin: 5px 0
                &:hover
                    color: $decoration
</style>