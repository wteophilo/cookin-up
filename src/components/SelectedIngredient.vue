<script lang="ts">
    import TagText from './TagText.vue';

    export default {
        components: {
            TagText
        },
        props: {
            ingredient: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                selected: false
            }
        }
    }
</script>

<template>
    <button class="ingrediente" 
    @click ="selected= !selected"
    :aria-pressed="selected">

        <TagText :texto="ingredient" :ativa="selected" />
    </button>
</template>

<style scoped>
 .ingrediente {
    cursor: pointer;
 }
</style>