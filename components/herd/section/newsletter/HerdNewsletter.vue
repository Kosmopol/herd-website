<script setup lang="ts">
import SectionWrapper from '~/components/herd/section/SectionWrapper.vue';
import HerdNewsletterForm from '~/components/herd/section/newsletter/HerdNewsletterForm.vue';
</script>

<template>
    <SectionWrapper id="follow">
        <div class="newsletter-section-content">
            <h2 class="h2">Herd's Newsletter</h2>
            <p>Subscribe to our newsletter to stay updated with the latest news, events, and exclusive offers from Herd!</p>
            <HerdNewsletterForm></HerdNewsletterForm>
        </div>
    </SectionWrapper>
</template>

<style lang="scss" scoped>
    .newsletter-section-content{
        margin: 3rem 0;
    }
</style>