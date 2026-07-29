<script setup lang="ts">
    import { ref } from 'vue';
    import UserList from './UserList.vue';
    import SelectIngredients from './SelectIngredients.vue';
    
    const ingredients = ref<string[]>([]);

    function addIngredient(ingredient: string) {
        ingredients.value.push(ingredient);
    }

    function removeIngredient(ingredient: string) {
        ingredients.value = ingredients.value.filter(list => ingredient !== list)
    }
</script>

<template>
    <main class="conteudo-principal">
        <UserList :ingredients="ingredients" />    
        <SelectIngredients 
            @add-ingredient="addIngredient($event)"
            @remove-ingredient="removeIngredient($event)"
        />
    </main>
</template>