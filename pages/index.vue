<script setup lang="ts">
import MainContainer from '~/components/herd/MainContainer.vue';
import HerdSplashScreen from '~/components/herd/section/splash-screen/HerdSplashScreen.vue';
import HerdGameSection from '~/components/herd/section/game/HerdGameSection.vue';
import HerdCryptoSection from '~/components/herd/section/crypto/HerdCryptoSection.vue';
import HerdTeamSection from '~/components/herd/section/team/HerdTeamSection.vue';
import HerdAdvisoryBoardSection from '~/components/herd/section/advisory-board/HerdAdvisoryBoardSection.vue';
import HerdNewsletter from '~/components/herd/section/newsletter/HerdNewsletter.vue';

useScrollSpy({ threshold: 0.5 });
</script>

<template>
  <MainContainer>
    <!-- <HerdSplashScreen></HerdSplashScreen> -->
    <HerdGameSection class="section-m"></HerdGameSection>
    <HerdCryptoSection class="section-m section-margin"></HerdCryptoSection>
    <HerdTeamSection class="section-m section-margin"></HerdTeamSection>
    <HerdAdvisoryBoardSection class="section-m section-margin"></HerdAdvisoryBoardSection>
    <HerdNewsletter class="section-m section-margin"></HerdNewsletter>
  </MainContainer>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.section-m {
  max-width: var(--max-width);
}

.section-margin {
  margin: 0 1rem;
  padding-top: 80px;
}

.min-height-section {
  min-height: 70vh;
}

@media (min-width: $breakpoint-m) {
  .section-margin {
    margin: 0 1rem;
  }
}

@media (min-width: $breakpoint-l) {
  .section-margin {
    margin: 0 3rem;
  }
}
</style>