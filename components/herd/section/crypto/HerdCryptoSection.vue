<script setup lang="ts">
import SectionWrapper from '~/components/herd/section/SectionWrapper.vue';
import pictoCardano from "@/assets/images/pictos/cardano.png"
import pictoCardano2 from "@/assets/images/pictos/logomn1.png"
import pictoKarma from "@/assets/images/pictos/karmagueddon_some_happy_people_around_this_logo_simple_logo_b1a2cf3c-9f5f-43e4-8e57-1054eed00ec7.png"
import pictoAda from "@/assets/images/pictos/cardano-ada-icon19.logowik.com.png"
</script>

<template>
    <SectionWrapper id="crypto">
        <h2 class="h2-crypto">Cardano Blockchain</h2>
        <div class="crypto-section-content">
            <div class="crypto-explaination">
                <div class="crypto-section-img">
                    <div class="crypto-img-container">
                        <img class="crypto-img" :src="pictoCardano" alt="">
                    </div>
                </div>
                <div class="crypto-section-description">
                    <p>We propose building Herd, a decentralized music and DJ battle game that integrates blockchain
                        technology, NFTs, and community governance. Our game allows players to mix sound packs in real
                        time,
                        compete against AI, engage in DJ battles streamed on Twitch, and earn rewards through community
                        participation.</p>
                </div>
            </div>
            <div class="crypto-explaination">

                <div class="crypto-section-img">
                    <div class="crypto-img-container">
                        <img class="crypto-img" :src="pictoCardano2" alt="">
                    </div>
                </div>
                <div class="crypto-section-description">
                    <p>We propose building Herd, a decentralized music and DJ battle game that integrates blockchain
                        technology, NFTs, and community governance. Our game allows players to mix sound packs in real
                        time,
                        compete against AI, engage in DJ battles streamed on Twitch, and earn rewards through community
                        participation.</p>
                </div>
            </div>
            <div class="crypto-explaination">

                <div class="crypto-section-img">
                    <div class="crypto-img-container">
                        <img class="crypto-img" :src="pictoKarma" alt="">
                    </div>
                </div>
                <div class="crypto-section-description">
                    <p>We propose building Herd, a decentralized music and DJ battle game that integrates blockchain
                        technology, NFTs, and community governance. Our game allows players to mix sound packs in real
                        time,
                        compete against AI, engage in DJ battles streamed on Twitch, and earn rewards through community
                        participation.</p>
                </div>
            </div>
            <div class="crypto-explaination">

                <div class="crypto-section-img">
                    <div class="crypto-img-container">
                        <img class="crypto-img" :src="pictoAda" alt="">
                    </div>
                </div>
                <div class="crypto-section-description">
                    <p>We propose building Herd, a decentralized music and DJ battle game that integrates blockchain
                        technology, NFTs, and community governance. Our game allows players to mix sound packs in real
                        time,
                        compete against AI, engage in DJ battles streamed on Twitch, and earn rewards through community
                        participation.</p>
                </div>
            </div>
        </div>
    </SectionWrapper>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";


.h2-crypto {
    color: var(--title-color-2);
    font-size: 1.6rem;
}


.crypto-section-content {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 3rem;
}

.crypto-explaination {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.crypto-img-container {
    width: 64px;
    height: 64px;
    border-radius: 100%;
    overflow: hidden;
}

.crypto-img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.crypto-section-description {
    display: flex;
    flex: 1;
    font-size: 1.4rem;
}

@media (min-width: $breakpoint-m) {
    .crypto-img-container {
        width: 120px;
        height: 120px;
    }

    .h2-crypto {
        font-size: 1.7rem;
    }

}

@media (min-width: $breakpoint-l) {
    .h2-crypto {
        font-size: 1.8rem;
    }

}
</style>