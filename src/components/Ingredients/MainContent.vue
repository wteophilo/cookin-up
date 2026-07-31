<script setup lang="ts">
    import { ref } from 'vue';
    import UserList from './UserList.vue';
    import SelectIngredients from './SelectIngredients.vue';
    import ShowRecipe from '@/components/Recipes/ShowRecipe.vue';
    
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
        <KeepAlive include="SelectIngredients">
            <SelectIngredients 
                :ingredients="ingredients"
                @add-ingredient="addIngredient($event)"
                @remove-ingredient="removeIngredient($event)"
                @search-recipe="navigateTo('ShowRecipe')"
                v-if="content === 'SelectIngredients'"
            />
            <ShowRecipe 
                v-else-if="content === 'ShowRecipe'" 
                @edit-recipe="navigateTo('SelectIngredients')"
            />
        </KeepAlive>
    </main>
</template>