<script setup lang="ts">
    import { ref } from 'vue';
    import UserList from './UserList.vue';
    import SelectIngredients from './SelectIngredients.vue';
    import type ShowRecepie from './ShowRecepie.vue';
    
    type Page = 'SelectIngredients' | 'ShowRecipe';
    const ingredients = ref<string[]>([]);
    const content = ref<Page>('SelectIngredients')

    function addIngredient(ingredient: string) {
        ingredients.value.push(ingredient);
    }

    function removeIngredient(ingredient: string) {
        ingredients.value = ingredients.value.filter(list => ingredient !== list)
    }

    function navigateTo(page: Page) {
        content.value = page;
    }
</script>

<template>
    <main class="conteudo-principal">
        <UserList :ingredients="ingredients" />    
        <SelectIngredients 
            @add-ingredient="addIngredient($event)"
            @remove-ingredient="removeIngredient($event)"
            @search-recipe="navigateTo('ShowRecipe')"
            v-if="content === 'SelectIngredients'"
        />
        <ShowRecepie v-else-if="content === 'ShowRecipe'" />
    </main>
</template>