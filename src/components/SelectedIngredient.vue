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
        },
        methods: {
            toggleSelection() {
                this.selected = !this.selected;
                if(this.selected) {
                    this.$emit("addIngredient", this.ingredient)                            
                } else {
                   this.$emit("removeIngredient", this.ingredient)
                }
            }
        },
        emits: ['addIngredient', 'removeIngredient']
    }
</script>

<template>
    <button class="ingrediente" 
    @click ="toggleSelection()"
    :aria-pressed="selected">

        <TagText :texto="ingredient" :ativa="selected" />
    </button>
</template>

<style scoped>
 .ingrediente {
    cursor: pointer;
 }
</style>