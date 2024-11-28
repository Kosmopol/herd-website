<script setup lang="ts">
import SectionWrapper from '@/components/herd/section/SectionWrapper.vue';
import CanvasLayout from '@/components/herd/section/CanvasLayout.vue';
import CarouselLayout from '@/components/herd/section/CarouselLayout.vue';
import imgGame from '~/assets/images/Headquarters_Herd.png'
import imgChara from '~/assets/images/Illustration_sans_titre 1.png'
</script>

<template>
    <SectionWrapper id="game">
        <CarouselLayout autoPlay :interval="5000" showControls showDots>
            <template #slide-0>
                <img class="carousel-slide-img" :src="imgChara" alt="Image 1" />
            </template>
            <template #slide-1>
                <img class="carousel-slide-img" :src="imgGame" alt="Image 2" />
            </template>
            <template #slide-2>
                <img class="carousel-slide-img" :src="imgChara" alt="Image 3" />
            </template>
        </CarouselLayout>
        <!-- <CanvasLayout>
            <div class="game-canvas-container">
                <div class="game-canvas-text-container">
                    <h1>Welcome to Fraktar</h1>
                    <p class="game-canvas-text">Herd is an online Dj Battling Game project taking place in the world of
                        Fraktar
                        Herd is an online Dj Battling Game project.
                        Herd is an online Dj Battling Game project.
                        Herd is an online Dj Battling Game project.
                        Herd is an online Dj Battling Game project. But did you know this,
                        Herd is an online Dj Battling Game project.
                        Herd is an online Dj Battling Game project.
                        Herd is an online Dj Battling Game project.
                        Herd is an online Dj Battling Game project. Yes it is.</p>


                </div>
                <div class="game-chara-canvas-img-container">
                    <img class="game-chara-canvas-img" height="100%" :src="imgChara" />
                </div>
            </div>
            <template #fullsize>
                <div class="game-bg-canvas-img-container">
                    <img class="game-bg-canvas-img" width="100%" :src="imgGame" />
                </div>
            </template>
        </CanvasLayout> -->
    </SectionWrapper>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";


.carousel-slide-img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

.game-canvas-container {
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 3;
    position: relative;
    flex-direction: column;
}

.game-canvas-text-container {
    z-index: 2;
    display: flex;
    flex-direction: column;
}

.game-canvas-text {
    font-size: 1.2rem;
}


.game-chara-canvas-img-container {
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    overflow: hidden;
    display: flex;
}

.game-chara-canvas-img {
    overflow: hidden;
}

.game-bg-canvas-img-container {
    width: 100%;
    height: 100%;
    right: 0;
    z-index: 2;
    position: relative;
    overflow: hidden;
}

.game-bg-canvas-img {
    overflow: hidden;
    opacity: 0.04;
    right: 0;
}

@media (min-width: $breakpoint-m) {
    .game-canvas-container {
        flex-direction: row;
    }

    .game-canvas-text-container {
        flex: 3;
    }

    .game-chara-canvas-img-container {
        flex: 1;

    }

    .game-chara-canvas-img {
        position: absolute;
    }

    .game-canvas-text {
        font-size: 1.1rem;
    }


}

@media (min-width: $breakpoint-l) {
    .game-canvas-text {
        font-size: 1.4rem;
    }
}
</style>