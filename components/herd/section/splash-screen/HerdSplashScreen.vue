<script setup lang="ts">
import SectionWrapper from '~/components/herd/section/SectionWrapper.vue';
import background from '@/assets/images/backgrounds/BanniereX.png'
</script>

<template>
    <SectionWrapper>
        <div class="splash-image-container">
            <img class="splash-image" :src="background"></img>
        </div>
    </SectionWrapper>
</template>

<style lang="scss" scoped>
.splash-image-container {
    display: flex;
    justify-content: center;
}

.splash-image {
    width: 100%;
}
</style>