<script setup lang="ts">
    import { ref } from 'vue';

    const year = ref((new Date()).getFullYear());
</script>

<template>
    <footer class="footer">
        <p> Desenvolvido por Willian Teophilo | {{ year }} - Projecto ficticio sem fins comerciais.</p>
    </footer>
</template>

<style scoped>
    .footer {
        background: #263A29;
        padding: 1.5rem 7.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (max-width: 1300px) {
        .footer {
            padding: 1.5rem 3.75rem;
        }
    }

    @media only screen and (max-width: 767px) {
        .footer {
            padding: 1.5rem;
        }
    }
</style>