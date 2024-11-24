<script lang="ts" setup>
import xIcon from '@/assets/images/pictos/X/logo-white.png'
import cardanoIcon from '@/assets/images/pictos/cardano.png'
</script>

<template>
    <div class="herd-footer-socials">
        <h2 class="herd-footer-socials-text">
            Follow us on social
        </h2>
        <div class="herd-footer-socials-icons">
            <a href="https://x.com/Herd_Project" target="_blank" rel="noopener noreferrer">
                <img :src="xIcon" alt="X Icon" style="width: 64px; height: 64px; margin: 0 10px;">
            </a>
            <a href="https://cardano.ideascale.com/c/cardano/idea/132602" target="_blank" rel="noopener noreferrer">
                <img :src="cardanoIcon" alt="Cardano Icon" style="width: 64px; height: 64px; margin: 0 10px;">
            </a>
        </div>
</div>
</template>

<style lang="scss" scoped>
.herd-footer-socials{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
}
.herd-footer-socials-text{
    font-size: 1.4rem;
    text-transform: uppercase;
}

.herd-footer-socials-icons{
    display: flex;
    gap:2rem;
}
</style>