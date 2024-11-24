<script setup lang="ts">
import SectionWrapper from '~/components/herd/section/SectionWrapper.vue';
import ImgQuinthNFT from "@/assets/images/QuinthNFT.png"
import ImgSamaraNFT from "@/assets/images/SamaraNFT.png"
</script>

<template>
    <SectionWrapper id="crypto">
        <div class="crypto-section-content">
            <div class="crypto-section-img">
                <div class="crypto-img-container crypto-img-container-left">
                    <img width="100%" :src="ImgSamaraNFT" alt="">
                </div>
                <div class="crypto-img-container crypto-img-container-right">
                    <img width="100%" :src="ImgQuinthNFT" alt="">
                </div>
            </div>
            <div class="crypto-section-description">
                <p>We propose building Herd, a decentralized music and DJ battle game that integrates blockchain
                    technology, NFTs, and community governance. Our game allows players to mix sound packs in real time,
                    compete against AI, engage in DJ battles streamed on Twitch, and earn rewards through community
                    participation.</p>
            </div>
        </div>
    </SectionWrapper>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.crypto-section-content {
    display: flex;
    margin-top: 2rem;
}

.crypto-section-img {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.crypto-img-container {
    width: 120px;
}

.crypto-img-container-left {
    left: 2rem;
    transform: translateX(-1.5rem);
}

.crypto-img-container-right {
    transform: translateX(1.5rem);
    right: 2rem;
}

.crypto-section-description {
    display: flex;
    flex: 1;
    font-size: 1.4rem;
}

@media (min-width: $breakpoint-m) {
    .crypto-img-container {
        width: 200px;
    }

    .crypto-img-container-left {
    left: 2rem;
    transform: translateX(-4rem);
}

.crypto-img-container-right {
    transform: translateX(4rem);
    right: 2rem;
}

}
</style>