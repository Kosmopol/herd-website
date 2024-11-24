<script setup lang="ts">
import AppContainer from '@/components/herd/AppContainer.vue'
import HerdFooter from '@/components/herd/footer/HerdFooter.vue'
import HerdHeader from '@/components/herd/header/HerdHeader.vue';
import HerdEffectMouseLight from '@/components/herd/effect/HerdEffectMouseLight.vue';
</script>

<template>
  <HerdEffectMouseLight></HerdEffectMouseLight>
  <AppContainer id="home">
    <HerdHeader>
    </HerdHeader>
    <NuxtPage />
    <HerdFooter></HerdFooter>
  </AppContainer>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>