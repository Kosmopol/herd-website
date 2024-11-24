<script setup lang="ts">
import SilverCanvasImg from '@/assets/images/backgrounds/CadreArgentCropped_0001.png'
import GoldenCanvasImg from '@/assets/images/backgrounds/CadreDoreCropped_0001.png'
import SilverCanvasImgMobile from '@/assets/images/backgrounds/CadreArgentCroppedMobile.png'
import GoldenCanvasImgMobile from '@/assets/images/backgrounds/CadreDoreCroppedMobile.png'
const props = defineProps({
    isGold: {
        type: Boolean,
        default: false
    }
})

const canvasImg = computed(() => {
    return props.isGold ? GoldenCanvasImg : SilverCanvasImg
})

const canvasImgMobile = computed(() => {
    return props.isGold ? GoldenCanvasImgMobile : SilverCanvasImgMobile
})
</script>

<template>
    <div class="canvas-container">
        <img class="canvas-img-mobile" :src="canvasImgMobile" alt="an empty frame" width="100%">
        </img>
        <img class="canvas-img" :src="canvasImg" alt="an empty frame" width="100%">
        </img>
        <div class="full-size-canvas">
            <slot name="fullsize"></slot>
        </div>
        <div class="canvas-content">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.canvas-container {
    margin-top: 2rem;
    position: relative;
    width: 100%;
    z-index: 10;
}

.canvas-img {
    display: none;
}

.canvas-content {
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 2rem 4rem;
}

.full-size-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

@media (min-width: $breakpoint-m) {
    .canvas-img {
        display: block;
    }
    .canvas-img-mobile {
        display: none;
    }
}
</style>