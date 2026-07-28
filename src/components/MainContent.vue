<script lang="ts">
    import SelectIngredients from './SelectIngredients.vue';
    import UserList from './UserList.vue';

    export default {
        data() {
            return {
                ingredients: ['Alho', 'Manteiga', 'Orégano']
            }
        },
        components: {
            UserList,
            SelectIngredients
        }   
    }
</script>

<template>
    <main class="conteudo-principal">
        <UserList :ingredients="ingredients" />    
        <SelectIngredients/>
    </main>
</template>