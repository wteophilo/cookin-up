<script setup lang="ts">
    import { ref } from 'vue';
    import TagText from './TagText.vue';

    interface Props {
        ingredient: string;
    }

    const props = defineProps<Props>();

    //events
    const emit = defineEmits<{
        addIngredient: [ingredient: string];
        removeIngredient: [ingredient: string];
    }>();
    
    //data()
    const selected = ref(false);
    
    function toggleSelection() {
        selected.value = !selected.value;
    
        if (selected.value) {
            emit('addIngredient', props.ingredient);
        } else {
            emit('removeIngredient', props.ingredient);
        }
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