<script setup lang="ts">
  import type IRecipe from '@/interfaces/IRecipe';

  interface Props {
    recipe: IRecipe;
  }

  defineProps<Props>();
</script>

<template>
  <article class="receita">
    <header class="receita__cabecalho">
      <img :src="`/imagens/receitas/${recipe.imagem}`" :alt="`Foto de ${recipe.nome}`" class="receita__imagem">
    </header>

    <section class="receita__corpo">
      <h2 class="paragrafo receita__nome">
        {{ recipe.nome }}
      </h2>
    </section>
  </article>
</template>

<style scoped>
  .receita {
    display: flex;
    width: 17.625rem;
    max-width: 19.5rem;
    flex-direction: column;
    align-items: center;

    border-radius: 1rem;
    background: var(--branco, #FFF);
    box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);

    margin-bottom: 1.5rem;
  }

  .receita__corpo {
    padding: 2rem 1rem;
  }

  .receita__imagem {
    width: 100%;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
  }

  .receita__nome {
    font-weight: 700;
    color: var(--cinza, #444);
  }
</style>
