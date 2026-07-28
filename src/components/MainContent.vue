<script lang="ts">
    import SelectIngredients from './SelectIngredients.vue';
    import UserList from './UserList.vue';

    export default {
        data() {
            return {
                ingredients: [] as string[]
            }
        },
        components: {
            UserList,
            SelectIngredients
        },
        methods: {
            addIngredient(ingredient: string) {
                this.ingredients.push(ingredient);
            }
        }
    }
</script>

<template>
    <main class="conteudo-principal">
        <UserList :ingredients="ingredients" />    
        <SelectIngredients @add-ingredient="addIngredient($event)"/>
    </main>
</template>