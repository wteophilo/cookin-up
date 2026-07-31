<script setup lang="ts">
    import TagText from '../Common/TagText.vue';

    interface Props {
        ingredient: string;
        selected?: boolean;
    }

    const props = withDefaults(defineProps<Props>(), {
        selected: false
    });

    //events
    const emit = defineEmits<{
        addIngredient: [ingredient: string];
        removeIngredient: [ingredient: string];
    }>();
    
    function toggleSelection() {
        if (!props.selected) {
            emit('addIngredient', props.ingredient);
        } else {
            emit('removeIngredient', props.ingredient);
        }
    }
</script>

<template>
    <button class="ingrediente" 
    @click="toggleSelection()"
    :aria-pressed="selected">

        <TagText :texto="ingredient" :ativa="selected" />
    </button>
</template>

<style scoped>
 .ingrediente {
    cursor: pointer;
 }
</style>