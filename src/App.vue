<script lang="ts">
import HeaderBanner from './components/HeaderBanner.vue'
import MainContent from './components/MainContent.vue';
import SelectIngredients from './components/SelectIngredients.vue';
export default {
  components: {
    HeaderBanner,
    MainContent,
    SelectIngredients
  }
}
</script>

<template>
  <HeaderBanner />
  <MainContent />
  <SelectIngredients/>
</template>