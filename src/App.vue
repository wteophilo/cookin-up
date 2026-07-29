<script lang="ts">
import HeaderBanner from './components/HeaderBanner.vue'
import MainContent from './components/MainContent.vue';
import FooterBanner from './components/FooterBanner.vue';

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