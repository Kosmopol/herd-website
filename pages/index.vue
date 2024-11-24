<script setup lang="ts">
import MainContainer from '~/components/herd/MainContainer.vue';
import HerdSplashScreen from '~/components/herd/section/splash-screen/HerdSplashScreen.vue';
import HerdGameSection from '~/components/herd/section/game/HerdGameSection.vue';
import HerdCryptoSection from '~/components/herd/section/crypto/HerdCryptoSection.vue';
import HerdTeamSection from '~/components/herd/section/team/HerdTeamSection.vue';
import HerdNewsletter from '~/components/herd/section/newsletter/HerdNewsletter.vue';

useScrollSpy({ threshold: 0.5 });
</script>

<template>
  <MainContainer>
    <HerdSplashScreen></HerdSplashScreen>
    <HerdGameSection class="section-m"></HerdGameSection>
    <HerdCryptoSection class="section-m"></HerdCryptoSection>
    <HerdTeamSection class="section-m"></HerdTeamSection>
    <HerdNewsletter class="section-m"></HerdNewsletter>
  </MainContainer>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.section-m {
  max-width: var(--max-width);
  padding-top: 80px;
  margin: 0 1rem;
}

.min-height-section {
  min-height: 70vh;
}

@media (min-width: $breakpoint-m) {
  .section-m {
    margin: 0 1rem;
  }
}

@media (min-width: $breakpoint-l) {
  .section-m {
    margin: 0 3rem;
  }
}
</style>