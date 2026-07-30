<script lang="ts">
import HeaderBanner from '@/components/Ingredients/HeaderBanner.vue';
import MainContent from '@/components/Ingredients/MainContent.vue';
import FooterBanner from '@/components/Ingredients/FooterBanner.vue';

export default {
  components: {
    HeaderBanner,
    MainContent,
    FooterBanner
  }
}
</script>

<template>
  <HeaderBanner />
  <MainContent />
  <FooterBanner />
</template>